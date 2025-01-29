const pokemonUrl = "https://pokeapi-proxy.freecodecamp.rocks/api/pokemon/";
const search_btn = document.getElementById("search-button");
const serach_form = document.getElementById("serach-form");

const pokemon_name = document.getElementById("pokemon-name");
const pokemon_id = document.getElementById("pokemon-id");
const weight = document.getElementById("weight");
const height = document.getElementById("height");
const hp = document.getElementById('hp');
const attack = document.getElementById('attack');
const defense = document.getElementById('defense');
const specialAttack = document.getElementById('special-attack');
const specialDefense = document.getElementById('special-defense');
const speed = document.getElementById('speed');
const sprite_container = document.getElementById("sprite_container");
const types = document.getElementById("types");

const searchpokemon = async () => {
    try{
        resetDisplay();
        const inputPokemon = document.getElementById("search-input").value.toLowerCase();
        const fetchpokemonUrl = pokemonUrl + inputPokemon;
        const res = await fetch(fetchpokemonUrl);
        const data = await res.json();
        pokemon_name.textContent = data.name.toUpperCase();
        pokemon_id.textContent = `#${data.id}`;
        weight.textContent = `weight: ${data.weight}`;
        height.textContent = `height: ${data.height}`;
        hp.textContent = data.stats[0].base_stat;
        attack.textContent = data.stats[1].base_stat;
        defense.textContent = data.stats[2].base_stat;
        specialAttack.textContent = data.stats[3].base_stat;
        specialDefense.textContent = data.stats[4].base_stat;
        speed.textContent = data.stats[5].base_stat;
        
        sprite_container.innerHTML = `<img id="sprite" src=${data.sprites.front_default}>`;
        let typeInnerStr = "";
        for (i=0;i<data.types.length;i++){
            typeInnerStr = typeInnerStr + `<span class="type">${data.types[i].type.name.toUpperCase()}</span>`
        }
        types.innerHTML = typeInnerStr;

    } catch(err) {
        resetDisplay();
        alert("Pokémon not found");
    }
}
serach_form.addEventListener('submit',e => {
    e.preventDefault();
    searchpokemon();
});
const resetDisplay = () => {
    const sprite = document.getElementById('sprite');
    if (sprite) sprite.remove();
  
    // reset stats
    pokemon_name.textContent = '';
    pokemon_id.textContent = '';
    types.innerHTML = '';
    height.textContent = '';
    weight.textContent = '';
    hp.textContent = '';
    attack.textContent = '';
    defense.textContent = '';
    specialAttack.textContent = '';
    specialDefense.textContent = '';
    speed.textContent = '';
  };