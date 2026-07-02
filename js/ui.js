// ====================================
// Pokémon Champions Damage Calculator
// ui.js
// Ver.0.4.0
// ====================================

// ------------------------------
// ポケモン情報を画面へ反映
// ------------------------------

function fillPokemonData(inputId, pokemon) {

    if (!pokemon) return;

    const isAttacker = inputId === "attackerPokemon";

    const type1Select = document.getElementById(
        isAttacker ? "attackerType1" : "defenderType1"
    );

    const type2Select = document.getElementById(
        isAttacker ? "attackerType2" : "defenderType2"
    );

    if (type1Select) {
        type1Select.value = pokemon.type1 || "";
    }

    if (type2Select) {
        type2Select.value = pokemon.type2 || "";
    }

}

// ------------------------------
// タイプリスト初期化
// ------------------------------

function initializeTypeSelects() {

    const ids = [

        "attackerType1",
        "attackerType2",
        "defenderType1",
        "defenderType2",
        "moveType"

    ];

    ids.forEach(fillTypeSelect);

}

// ------------------------------
// タイプセレクト生成
// ------------------------------

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

// ------------------------------
// UI初期化
// ------------------------------

function initializeUI() {

    initializeTypeSelects();

}
