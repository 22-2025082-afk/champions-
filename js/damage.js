// ====================================
// Pokémon Champions Damage Calculator
// damage.js
// Ver.0.5.1
// ====================================

// ------------------------------
// Pokémon Champions ダメージ計算
// ------------------------------

function calculateChampionsDamage(data) {

    // ------------------------------
    // 仮データ取得（後でUI連動）
    // ------------------------------

    const atk = data.atk ?? 130;
    const def = data.def ?? 95;

    const power = data.power ?? 100;

    const abilityPointAtk = data.atkPoint ?? 0;
    const abilityPointDef = data.defPoint ?? 0;

    const natureAtk = data.atkNature ?? 1.0;
    const natureDef = data.defNature ?? 1.0;

    // ------------------------------
    // 実数値計算
    // ------------------------------

    const A = Math.floor((atk + 20 + abilityPointAtk) * natureAtk);
    const D = Math.floor((def + 20 + abilityPointDef) * natureDef);

    // ------------------------------
    // 固定パラメータ
    // ------------------------------

    const L = 50;

    const base = Math.floor((22 * power * A / D) / 50) + 2;

    // ------------------------------
    // 補正（今は仮）
    // ------------------------------

    const STAB = 1.0;
    const type = 1.0;
    const random = 1.0;

    const M = STAB * type * random;

    const damage = Math.floor(base * M);

    // ------------------------------
    // HP割合（仮）
    // ------------------------------

    const hp = data.hp ?? 300;

    const percent = (damage / hp) * 100;

    // ------------------------------
    // 返却
    // ------------------------------

    return {

        minDamage: damage,
        maxDamage: damage,

        minPercent: percent.toFixed(1),
        maxPercent: percent.toFixed(1),

        koText: "仮計算（Ver.0.5.1）",

        hpPercent: Math.max(0, 100 - percent)

    };
}
