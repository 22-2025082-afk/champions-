// ====================================
// Pokémon Champions Damage Calculator
// loader.js
// Ver.0.4.0
// ====================================

let pokemonData = [];

async function loadPokemonData() {
    const response = await fetch("data/pokemon.json");
    pokemonData = await response.json();

    console.log("ポケモンデータ読み込み完了", pokemonData);
}
