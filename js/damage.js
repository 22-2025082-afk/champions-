// ====================================
// Pokémon Champions Damage Calculator
// damage.js
// Ver.0.5.3
// ====================================

// タイプ相性（簡易版）
const TYPE_CHART = {

    normal:     { rock: 0.5, ghost: 0, steel: 0.5 },
    fire:       { grass: 2, ice: 2, bug: 2, steel: 2, fire: 0.5, water: 0.5, rock: 0.5, dragon: 0.5 },
    water:      { fire: 2, ground: 2, rock: 2, water: 0.5, grass: 0.5, dragon: 0.5 },
    electric:   { water: 2, flying: 2, electric: 0.5, grass: 0.5, dragon: 0.5, ground: 0 },
    grass:      { water: 2, ground: 2, rock: 2, fire: 0.5, grass: 0.5, poison: 0.5, flying: 0.5, bug: 0.5, dragon: 0.5, steel: 0.5 },
    ice:        { dragon: 2, flying: 2, grass: 2, ground: 2, fire: 0.5, water: 0.5, ice: 0.5, steel: 0.5 },
    fighting:   { normal: 2, ice: 2, rock: 2, dark: 2, steel: 2, poison: 0.5, flying: 0.5, psychic: 0.5, bug: 0.5, fairy: 0.5, ghost: 0 },
    poison:     { grass: 2, fairy: 2, poison: 0.5, ground: 0.5, rock: 0.5, ghost: 0.5, steel: 0 },
    ground:     { fire: 2, electric: 2, poison: 2, rock: 2, steel: 2, grass: 0.5, bug: 0.5, flying: 0 },
    flying:     { grass: 2, fighting: 2, bug: 2, electric: 0.5, rock: 0.5, steel: 0.5 },
    psychic:    { fighting: 2, poison: 2, psychic: 0.5, steel: 0.5, dark: 0 },
    bug:        { grass: 2, psychic: 2, dark: 2, fire: 0.5, fighting: 0.5, poison: 0.5, flying: 0.5, ghost: 0.5, steel: 0.5, fairy: 0.5 },
    rock:       { fire: 2, ice: 2, flying: 2, bug: 2, fighting: 0.5, ground: 0.5, steel: 0.5 },
    ghost:      { psychic: 2, ghost: 2, dark: 0.5, normal: 0 },
    dragon:     { dragon: 2, steel: 0.5, fairy: 0 },
    dark:       { psychic: 2, ghost: 2, fighting: 0.5, dark: 0.5, fairy: 0.5 },
    steel:      { ice: 2, rock: 2, fairy: 2, fire: 0.5, water: 0.5, electric: 0.5, steel: 0.5 },
    fairy:      { fighting: 2, dragon: 2, dark: 2, fire: 0.5, poison: 0.5, steel: 0.5 }

};

// ------------------------------
// メイン計算
// ------------------------------

function calculateChampionsDamage(data) {

    const atk = data.atk;
    const def = data.def;
    const hp = data.hp;

    const power = data.power;

    // ------------------------------
    // 実数値
    // ------------------------------

    const A = Math.floor((atk + 20 + data.atkPoint) * data.atkNature);
    const D = Math.floor((def + 20 + data.defPoint) * data.defNature);

    // ------------------------------
    // 基本ダメージ
    // ------------------------------

    const base = Math.floor((22 * power * A / D) / 50) + 2;

    // ------------------------------
    // STAB
    // ------------------------------

    const moveType = data.moveType;
    const attackerTypes = data.attackerTypes || [];

    const STAB = attackerTypes.includes(moveType) ? 1.5 : 1.0;

    // ------------------------------
    // タイプ相性
    // ------------------------------

    const defenderTypes = data.defenderTypes || [];

    let typeEffect = 1.0;

    defenderTypes.forEach(t => {

        const table = TYPE_CHART[moveType];

        if (table && table[t] !== undefined) {
            typeEffect *= table[t];
        }

    });

    // ------------------------------
    // 乱数（0.85〜1.00）
    // ------------------------------

    const randomMin = 0.85;
    const randomMax = 1.00;

    const Mmin = STAB * typeEffect * randomMin;
    const Mmax = STAB * typeEffect * randomMax;

    const minDamage = Math.floor(base * Mmin);
    const maxDamage = Math.floor(base * Mmax);

    // ------------------------------
    // HP割合
    // ------------------------------

    const minPercent = (minDamage / hp) * 100;
    const maxPercent = (maxDamage / hp) * 100;

    // ------------------------------
    // 結果
    // ------------------------------

    return {

        minDamage,
        maxDamage,

        minPercent: minPercent.toFixed(1),
        maxPercent: maxPercent.toFixed(1),

        koText: getKOText(maxDamage, hp),

        hpPercent: Math.max(0, 100 - maxPercent)

    };
}

// ------------------------------
// 確定数判定
// ------------------------------

function getKOText(damage, hp) {

    const hits = Math.ceil(hp / damage);

    if (hits === 1) return "確定1発";
    if (hits === 2) return "確定2発";
    if (hits === 3) return "確定3発";
    if (hits <= 5) return `${hits}発`;
    return "乱数耐え";
}
