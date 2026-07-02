// ====================================
// Pokémon Champions Damage Calculator
// main.js
// Ver.0.4.0
// ====================================

window.addEventListener("DOMContentLoaded", initialize);

// ------------------------------
// 初期化
// ------------------------------

async function initialize() {

    // データ読み込み
    await loadGameData();

    // UI初期化
    initializeUI();

    // ポケモン検索
    setupPokemonSearch(
        "attackerPokemon",
        "attackerSearchBox"
    );

    setupPokemonSearch(
        "defenderPokemon",
        "defenderSearchBox"
    );

    // 技検索
    setupMoveSearch();

    // ダメージ計算
    initializeCalculator();

    console.log("Pokémon Champions Damage Calculator Ver.0.4.0");

}
