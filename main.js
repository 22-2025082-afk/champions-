// ====================================
// Pokémon Champions Damage Calculator
// Ver.0.2.0
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
// （後でpokemon.jsへ移動）
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
// タイプリスト
// ------------------------------

function fillTypeSelect(id){

    const select = document.getElementById(id);

    if(!select) return;

    select.innerHTML = "";

    const first = document.createElement("option");
    first.value = "";
    first.textContent = "タイプ";
    select.appendChild(first);

    TYPES.forEach(type=>{

        const option = document.createElement("option");

        option.value = type.id;
        option.textContent = type.name;

        select.appendChild(option);

    });

}

fillTypeSelect("attackerType1");
fillTypeSelect("attackerType2");
fillTypeSelect("defenderType1");
fillTypeSelect("defenderType2");
fillTypeSelect("moveType");

// ------------------------------
// ポケモン検索
// ------------------------------

function setupPokemonSearch(inputId, searchBoxId){

    const input=document.getElementById(inputId);
    const searchBox=document.getElementById(searchBoxId);

    if(!input || !searchBox) return;

    input.addEventListener("input",()=>{

        const keyword=input.value.trim();

        searchBox.innerHTML="";

        if(keyword==="") return;

        const result=pokemons.filter(name=>
            name.includes(keyword)
        );

        result.forEach(name=>{

            const div=document.createElement("div");

            div.textContent=name;

            div.onclick=()=>{

                input.value=name;
                searchBox.innerHTML="";

            };

            searchBox.appendChild(div);

        });

    });

}

setupPokemonSearch(
    "attackerPokemon",
    "attackerSearchBox"
);

setupPokemonSearch(
    "defenderPokemon",
    "defenderSearchBox"
);

// ------------------------------
// ダメージ計算（仮）
// ------------------------------

calculateButton.addEventListener("click",()=>{

    damageValue.textContent="72 ～ 85";

    damagePercent.textContent="34.7% ～ 41.0%";

    koCount.textContent="確定3発";

    hpFill.style.width="65%";

});
