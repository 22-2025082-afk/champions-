// ====================================
// Pokémon Champions Damage Calculator
// Ver.0.1.1
// ====================================

// ------------------------------
// 要素取得
// ------------------------------

const calculateButton = document.getElementById("calculateButton");

const damageValue = document.getElementById("damageValue");
const damagePercent = document.getElementById("damagePercent");
const koCount = document.getElementById("koCount");
const hpFill = document.querySelector(".hp-fill");

// ------------------------------
// 仮ポケモンデータ
// ※後でpokemon.jsへ移動
// ------------------------------

const pokemons = [
    "ピカチュウ",
    "リザードン",
    "フシギダネ",
    "フシギソウ",
    "フシギバナ",
    "ヒトカゲ",
    "リザード",
    "ゼニガメ",
    "カメール",
    "カメックス",
    "ゲンガー",
    "カビゴン",
    "ガブリアス",
    "ルカリオ",
    "ミミッキュ",
    "サーナイト"
];

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

        const result = pokemons.filter(name =>
            name.includes(keyword)
        );

        result.forEach(name => {

            const item = document.createElement("div");

            item.textContent = name;

            item.addEventListener("click", () => {

                input.value = name;

                searchBox.innerHTML = "";

            });

            searchBox.appendChild(item);

        });

    });

}

// 攻撃側
setupPokemonSearch(
    "attackerPokemon",
    "attackerSearchBox"
);

// 防御側
setupPokemonSearch(
    "defenderPokemon",
    "defenderSearchBox"
);

// ------------------------------
// ダメージ計算（仮）
// ------------------------------

calculateButton.addEventListener("click", () => {

    damageValue.textContent = "72 ～ 85";

    damagePercent.textContent = "34.7% ～ 41.0%";

    koCount.textContent = "確定3発";

    hpFill.style.width = "65%";

});
