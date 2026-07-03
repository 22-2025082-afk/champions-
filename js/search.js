// ====================================
// Pokémon Champions Damage Calculator
// search.js
// Ver.0.5.0
// ====================================

// ------------------------------
// ポケモン検索
// ------------------------------

function setupPokemonSearch(inputId, searchBoxId) {

    const input = document.getElementById(inputId);
    const searchBox = document.getElementById(searchBoxId);

    if (!input || !searchBox) return;

    input.addEventListener("input", () => {

        const keyword = input.value.trim();

        searchBox.innerHTML = "";

        if (keyword === "") return;

        const result = GameData.pokemon.filter(pokemon =>
            pokemon.name.includes(keyword)
        );

        result.forEach(pokemon => {

            const div = document.createElement("div");

            div.textContent = pokemon.name;

            div.addEventListener("click", () => {

                input.value = pokemon.name;
                searchBox.innerHTML = "";

                fillPokemonData(inputId, pokemon);

            });

            searchBox.appendChild(div);

        });

    });

}

// ------------------------------
// 技検索
// ------------------------------

function setupMoveSearch() {

    const input = document.getElementById("moveName");
    const searchBox = document.getElementById("moveSearchBox");

    if (!input || !searchBox) return;

    input.addEventListener("input", () => {

        const keyword = input.value.trim();

        searchBox.innerHTML = "";

        if (keyword === "") return;

        const result = GameData.moves.filter(move =>
            move.name.includes(keyword)
        );

        result.forEach(move => {

            const div = document.createElement("div");

            div.textContent = move.name;

            div.addEventListener("click", () => {

                input.value = move.name;

                searchBox.innerHTML = "";

                fillMoveData(move);

            });

            searchBox.appendChild(div);

        });

    });

    // 入力欄以外をクリックしたら候補を閉じる
    document.addEventListener("click", (event) => {

        if (
            event.target !== input &&
            !searchBox.contains(event.target)
        ) {

            searchBox.innerHTML = "";

        }

    });

}
