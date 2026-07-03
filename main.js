function log(msg) {
    const div = document.createElement("div");
    div.textContent = msg;
    document.body.appendChild(div);
}

console.log("1: start");
await loadGameData();
console.log("2: data loaded");
initializeUI();
console.log("3: ui");
setupPokemonSearch("attackerPokemon", "attackerSearchBox");
console.log("4: search1");
setupPokemonSearch("defenderPokemon", "defenderSearchBox");
console.log("5: search2");
setupMoveSearch();
console.log("6: move search");
initializeCalculator();
console.log("7: calculator");
function log(msg) {

    const div = document.createElement("div");

    div.textContent = msg;
    div.style.fontSize = "12px";
    div.style.color = "red";
    div.style.background = "black";
    div.style.padding = "2px";

    document.body.appendChild(div);
}
