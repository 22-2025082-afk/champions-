// ====================================
// Pokémon Champions Damage Calculator
// calculator.js
// Ver.0.5.2
// ====================================

// ------------------------------
// 要素取得
// ------------------------------

const calculateButton = document.getElementById("calculateButton");

const damageValue = document.getElementById("damageValue");
const damagePercent = document.getElementById("damagePercent");
const koCount = document.getElementById("koCount");
const hpFill = document.querySelector(".hp-fill");

// ------------------------------
// ダメージ計算（画面連動版）
// ------------------------------

function calculateDamage() {

    // 攻撃側
    const atkPokemonName = document.getElementById("attackerPokemon").value;
    const atkPokemon = GameData.pokemon.find(p => p.name === atkPokemonName);

    // 防御側
    const defPokemonName = document.getElementById("defenderPokemon").value;
    const defPokemon = GameData.pokemon.find(p => p.name === defPokemonName);

    // 技
    const moveName = document.getElementById("moveName").value;
    const move = GameData.moves.find(m => m.name === moveName);

    if (!atkPokemon || !defPokemon || !move) {
        alert("ポケモン・技を正しく選択してください");
        return;
    }

    // ------------------------------
    // データ作成
    // ------------------------------

    const data = {

        atk: atkPokemon.atk,
        def: defPokemon.def,
        hp: defPokemon.hp,
        power: move.power,

        atkPoint: 0,
        defPoint: 0,

        atkNature: 1.0,
        defNature: 1.0

    };

    // ------------------------------
    // 計算実行
    // ------------------------------

    const result = calculateChampionsDamage(data);

    // ------------------------------
    // 表示
    // ------------------------------

    damageValue.textContent =
        `${result.minDamage}`;

    damagePercent.textContent =
        `${result.minPercent}%`;

    koCount.textContent =
        result.koText;

    updateHpBar(result.hpPercent);

}

// ------------------------------
// HPバー更新
// ------------------------------

function updateHpBar(percent) {

    hpFill.style.width = `${percent}%`;

}

// ------------------------------
// 初期化
// ------------------------------

function initializeCalculator() {

    if (!calculateButton) return;

    calculateButton.addEventListener("click", calculateDamage);

}
