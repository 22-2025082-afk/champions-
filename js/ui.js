// ====================================
// Pokémon Champions Damage Calculator
// ui.js
// Ver.0.5.0
// ====================================

// ------------------------------
// ポケモン情報を画面へ反映
// ------------------------------

function fillPokemonData(inputId, pokemon) {

    if (!pokemon) return;

    const isAttacker = inputId === "attackerPokemon";

    document.getElementById(
        isAttacker ? "attackerType1" : "defenderType1"
    ).value = pokemon.type1 || "";

    document.getElementById(
        isAttacker ? "attackerType2" : "defenderType2"
    ).value = pokemon.type2 || "";

}

// ------------------------------
// 技情報を画面へ反映
// ------------------------------

function fillMoveData(move) {

    if (!move) return;

    document.getElementById("power").value =
        move.power;

    document.getElementById("moveType").value =
        move.type;

}

// ------------------------------
// タイプリスト初期化
// ------------------------------

function initializeTypeSelects() {

    [
        "attackerType1",
        "attackerType2",
        "defenderType1",
        "defenderType2",
        "moveType"
    ].forEach(fillTypeSelect);

}

function fillTypeSelect(id) {

    const select = document.getElementById(id);

    if (!select) return;

    select.innerHTML = "";

    const first = document.createElement("option");

    first.value = "";
    first.textContent = "タイプ";

    select.appendChild(first);

    TYPES.forEach(type => {

        const option = document.createElement("option");

        option.value = type.id;
        option.textContent = type.name;

        select.appendChild(option);

    });

}

function initializeUI() {

    initializeTypeSelects();

}
