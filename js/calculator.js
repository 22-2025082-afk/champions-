function calculateDamage() {

    const atkName = document.getElementById("attackerPokemon").value.trim();
    const defName = document.getElementById("defenderPokemon").value.trim();
    const moveName = document.getElementById("moveName").value.trim();

    const atkPokemon = GameData.pokemon.find(p => p.name === atkName);
    const defPokemon = GameData.pokemon.find(p => p.name === defName);
    const move = GameData.moves.find(m => m.name === moveName);

    if (!atkPokemon || !defPokemon || !move) {
        alert("ポケモン・技を選択してね");
        return;
    }

    const data = {
        atk: atkPokemon.atk || 0,
        def: defPokemon.def || 0,
        hp: defPokemon.hp || 1,
        power: move.power || 0,

        atkPoint: Number(document.getElementById("attackerPoint").value || 0),
        defPoint: Number(document.getElementById("defenderPoint").value || 0),

        atkNature: Number(document.getElementById("attackerNature").value || 1),
        defNature: Number(document.getElementById("defenderNature").value || 1),

        moveType: move.type,
        attackerTypes: [atkPokemon.type1, atkPokemon.type2].filter(t => t),
        defenderTypes: [defPokemon.type1, defPokemon.type2].filter(t => t)
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

    const button = document.getElementById("calculateButton");
    if (!button) return;

    button.addEventListener("click", calculateDamage);
}
