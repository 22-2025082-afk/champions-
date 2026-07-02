// ====================================
// Pokémon Champions Damage Calculator
// loader.js
// Ver.0.4.0
// ====================================

let pokemonData = [];
let moveData = [];

/**
 * JSONファイルを読み込む
 */
async function loadJson(path) {

    const response = await fetch(path);

    if (!response.ok) {
        throw new Error(`${path} の読み込みに失敗しました。`);
    }

    return await response.json();

}

/**
 * 全データ読み込み
 */
async function loadGameData() {

    try {

        pokemonData = await loadJson("data/pokemon.json");

        try {
            moveData = await loadJson("data/moves.json");
        } catch {

            // moves.jsonが空でもエラーにしない
            moveData = [];

        }

        console.log("Pokemon:", pokemonData.length);
        console.log("Moves:", moveData.length);

        return true;

    } catch (error) {

        console.error(error);
        alert("データの読み込みに失敗しました。");

        return false;

    }

}
