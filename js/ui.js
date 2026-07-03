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
// 技情報を画面へ反映
// ------------------------------

function fillMoveData(move) {

    if (!move) return;

    // 威力
    document.getElementById("power").value =
        move.power ?? "";

    // タイプ
    document.getElementById("moveType").value =
        move.type ?? "";

    // 分類
    const category = document.getElementById("moveCategory");

    if (category) {

        switch (move.category) {

            case "physical":
                category.value = "物理";
                break;

            case "special":
                category.value = "特殊";
                break;

            case "status":
                category.value = "変化";
                break;

            default:
                category.value = "";
        }

    }

    // 命中
    const accuracy = document.getElementById("moveAccuracy");

    if (accuracy) {

        accuracy.value = move.accuracy ?? "";

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
