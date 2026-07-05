alert("main.jsを読み込みました");

// ====================================
// Pokémon Champions Damage Calculator
// main.js
// ====================================

// ------------------------------
// iPad用ログ表示
// ------------------------------
function log(msg) {
    const div = document.createElement("div");
    div.textContent = msg;
    div.style.fontSize = "12px";
    div.style.color = "red";
    div.style.background = "black";
    div.style.padding = "2px";
    document.body.appendChild(div);
}

// ------------------------------
// 初期化
// ------------------------------
window.addEventListener("DOMContentLoaded", initialize);

async function initialize() {

    log("1 start");

    await loadGameData();
    log("2 data loaded");

    initializeUI();
    log("3 ui");

    setupPokemonSearch("attackerPokemon", "attackerSearchBox");
    log("4 attacker search");

    setupPokemonSearch("defenderPokemon", "defenderSearchBox");
    log("5 defender search");

    setupMoveSearch();
    log("6 move search");

    initializeCalculator();
    log("7 calculator");

    log("ALL READY");
}
