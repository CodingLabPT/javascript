const btnPrev = document.querySelector('.prev');
const btnNext = document.querySelector('.next');

const form = document.querySelector('.form');
const input = document.querySelector('.input');

const pokemonName = document.querySelector('.pokemonName');
const pokemonID = document.querySelector('.pokemonID');
const pokemonImage = document.querySelector('.pokemon');

let searchedPokemon = 1;

form.addEventListener('submit', (e)=> {
    e.preventDefault();
    rederPokemon(input.value.toLowerCase());
})

const fetchPokemon = async(pokemon) => {
    const APIResponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
    if (APIResponse.status == 200) {
        const data = await APIResponse.json();
        return data;    
    }
}

const rederPokemon = async(pokemon) => {

    pokemonName.innerHTML = "Loading ...<br><br>Please wait!!"
    pokemonImage.style.display = "none";
    pokemonID.innerHTML = "";

    const data = await fetchPokemon(pokemon);
    if (data) {
        searchedPokemon = data.id;
        pokemonImage.style.display = "block";
        pokemonName.innerHTML = data.name;
        pokemonID.innerHTML = data.id;
        pokemonImage.src = data['sprites']['versions']['generation-v']['black-white']['animated']['front_default'];
        input.value = ''
    } else {
        pokemonName.innerHTML = "Not Found...<br><br>Try again";
        pokemonID.innerHTML = "";
        pokemonImage.style.display = "none";
    }
}

btnPrev.addEventListener('click', ()=>{
    if(searchedPokemon > 1) {
        searchedPokemon -= 1;
        rederPokemon(searchedPokemon);
    }
    
})

btnNext.addEventListener('click', ()=>{
    searchedPokemon += 1;
    rederPokemon(searchedPokemon);
})

rederPokemon(searchedPokemon)