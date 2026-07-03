// ====================================
// Pokémon Champions Damage Calculator
// damage.js (Stable Patch)
// ====================================

function calculateChampionsDamage(data) {

    const atk = data.atk;
    const def = data.def;
    const hp = data.hp;
    const power = data.power;

    // ------------------------------
    // 防御（安全化）
    // ------------------------------
    const A = Math.floor((atk + 20 + (data.atkPoint || 0)) * (data.atkNature || 1));
    const D = Math.floor((def + 20 + (data.defPoint || 0)) * (data.defNature || 1));

    const safeD = Math.max(1, D);

    // ------------------------------
    // 基本ダメージ
    // ------------------------------
    const base = Math.floor((22 * power * A / safeD) / 50) + 2;

    // ------------------------------
    // STAB
    // ------------------------------
    const moveType = data.moveType;
    const attackerTypes = (data.attackerTypes || []).filter(t => t);

    const STAB = attackerTypes.includes(moveType) ? 1.5 : 1.0;

    // ------------------------------
    // タイプ相性
    // ------------------------------
    const defenderTypes = (data.defenderTypes || []).filter(t => t);

    let typeEffect = 1.0;

    defenderTypes.forEach(t => {
        const table = TYPE_CHART[moveType];
        if (table && table[t] !== undefined) {
            typeEffect *= table[t];
        }
    });

    // ------------------------------
    // 乱数
    // ------------------------------
    const randomMin = 0.85;
    const randomMax = 1.00;

    const minDamage = Math.floor(base * STAB * typeEffect * randomMin);
    const maxDamage = Math.floor(base * STAB * typeEffect * randomMax);

    const safeHp = Math.max(1, hp);

    const minPercent = (minDamage / safeHp) * 100;
    const maxPercent = (maxDamage / safeHp) * 100;

    return {
        minDamage,
        maxDamage,
        minPercent: minPercent.toFixed(1),
        maxPercent: maxPercent.toFixed(1),
        koText: getKOText(maxDamage, safeHp),
        hpPercent: Math.max(0, 100 - maxPercent)
    };
}

// ------------------------------
// KO判定（安全化）
// ------------------------------
function getKOText(damage, hp) {

    if (!damage || damage <= 0) return "倒せない";

    const hits = Math.ceil(hp / damage);

    if (hits === 1) return "確定1発";
    if (hits === 2) return "確定2発";
    if (hits === 3) return "確定3発";
    if (hits <= 5) return `${hits}発`;

    return "乱数耐え";
}
