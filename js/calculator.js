// ====================================
// Pokémon Champions Damage Calculator
// calculator.js
// Ver.0.6.0
// ====================================

const calculateButton = document.getElementById("calculateButton");

function calculateDamage() {

    const atkPokemon = GameData.pokemon.find(
        p => p.name === document.getElementById("attackerPokemon").value
    );

    const defPokemon = GameData.pokemon.find(
        p => p.name === document.getElementById("defenderPokemon").value
    );

    const move = GameData.moves.find(
        m => m.name === document.getElementById("moveName").value
    );

    if (!atkPokemon || !defPokemon || !move) {
        alert("ポケモン・技を選択してね");
        return;
    }

    const data = {
        atk: atkPokemon.atk,
        def: defPokemon.def,
        hp: defPokemon.hp,
        power: move.power,

        atkPoint: Number(document.getElementById("attackerPoint").value || 0),
        defPoint: Number(document.getElementById("defenderPoint").value || 0),

        atkNature: Number(document.getElementById("attackerNature").value || 1.0),
        defNature: Number(document.getElementById("defenderNature").value || 1.0),

        moveType: move.type,
        attackerTypes: [atkPokemon.type1, atkPokemon.type2].filter(Boolean),
        defenderTypes: [defPokemon.type1, defPokemon.type2].filter(Boolean)
    };

    const result = calculateChampionsDamage(data);

    document.getElementById("damageValue").textContent =
        `${result.minDamage} ～ ${result.maxDamage}`;

    document.getElementById("damagePercent").textContent =
        `${result.minPercent}% ～ ${result.maxPercent}%`;

    document.getElementById("koCount").textContent =
        result.koText;

    document.querySelector(".hp-fill").style.width =
        `${result.hpPercent}%`;
}

function initializeCalculator() {
    calculateButton.addEventListener("click", calculateDamage);
}
