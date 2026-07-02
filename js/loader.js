// ====================================
// Pokémon Champions Damage Calculator
// loader.js
// Ver.0.4.0
// ====================================

// ------------------------------
// ゲームデータ
// ------------------------------

const GameData = {

    pokemon: [],
    moves: []

};

// ------------------------------
// JSON読み込み
// ------------------------------

async function loadJson(path) {

    const response = await fetch(path);

    if (!response.ok) {
        throw new Error(`${path} の読み込みに失敗しました。`);
    }

    return await response.json();

}

// ------------------------------
// 全データ読み込み
// ------------------------------

async function loadGameData() {

    try {

        GameData.pokemon = await loadJson("data/pokemon.json");

    } catch (error) {

        console.error(error);
        alert("pokemon.json の読み込みに失敗しました。");

    }

    try {

        GameData.moves = await loadJson("data/moves.json");

    } catch {

        // moves.json がまだ空でも動くようにする
        GameData.moves = [];

    }

    console.log("===== Data Loaded =====");
    console.log("Pokemon :", GameData.pokemon.length);
    console.log("Moves :", GameData.moves.length);

}
