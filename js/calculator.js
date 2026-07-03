// ====================================
// Pokémon Champions Damage Calculator
// calculator.js
// Ver.0.5.0
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
// ダメージ計算
// ------------------------------

function calculateDamage() {

    // 現在はテスト用
    // 将来的には画面から全データを取得する

    const data = {};

    const result = calculateChampionsDamage(data);

    damageValue.textContent =
        `${result.minDamage} ～ ${result.maxDamage}`;

    damagePercent.textContent =
        `${result.minPercent}% ～ ${result.maxPercent}%`;

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

    calculateButton.addEventListener(
        "click",
        calculateDamage
    );

}
