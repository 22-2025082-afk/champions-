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

    if (!input) return;

    input.addEventListener("input", () => {

        const keyword = input.value.trim();

        if (keyword === "") return;

        const move = GameData.moves.find(m =>
            m.name === keyword
        );

        if (!move) return;

        fillMoveData(move);

    });

}
