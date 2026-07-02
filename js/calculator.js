// ====================================
// Pokémon Champions Damage Calculator
// calculator.js
// Ver.0.4.0
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
// 仮ダメージ計算
// ------------------------------

function calculateDamage() {

    // Ver.0.4では仮表示

    const minDamage = 72;
    const maxDamage = 85;

    damageValue.textContent =
        `${minDamage} ～ ${maxDamage}`;

    damagePercent.textContent =
        "34.7% ～ 41.0%";

    koCount.textContent =
        "確定3発";

    updateHpBar(65);

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

    calculateButton.addEventListener(
        "click",
        calculateDamage
    );

}
