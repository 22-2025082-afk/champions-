// ====================================
// Pokémon Champions Damage Calculator
// search.js
// Ver.0.4.0
// ====================================

// ポケモン検索機能

function setupPokemonSearch(inputId, searchBoxId) {

    const input = document.getElementById(inputId);
    const searchBox = document.getElementById(searchBoxId);

    if (!input || !searchBox) return;

    input.addEventListener("input", () => {

        const keyword = input.value.trim();

        searchBox.innerHTML = "";

        if (keyword === "") return;

        // pokemon.jsonを読み込んでいる場合
        const list =
            (window.pokemonData && window.pokemonData.length)
                ? window.pokemonData
                : pokemons.map(name => ({ name }));

        const result = list.filter(pokemon =>
            pokemon.name.includes(keyword)
        );

        result.forEach(pokemon => {

            const div = document.createElement("div");

            div.textContent = pokemon.name;

            div.addEventListener("click", () => {

                input.value = pokemon.name;
                searchBox.innerHTML = "";

                // ui.jsが読み込まれていれば自動入力
                if (typeof fillPokemonData === "function") {
                    fillPokemonData(inputId, pokemon);
                }

            });

            searchBox.appendChild(div);

        });

    });

}

// 初期化
setupPokemonSearch(
    "attackerPokemon",
    "attackerSearchBox"
);

setupPokemonSearch(
    "defenderPokemon",
    "defenderSearchBox"
);
