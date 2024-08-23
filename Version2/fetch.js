const f = async() =>{
    const res = await fetch('https://pokeapi.co/api/v2/pokemon?limit=1000');
    const pokemonApi = await res.json();

    displayPokemon(pokemonApi);
}

function displayPokemon(pokemonApi){
    console.log(pokemonApi.results);
    const pokemonArray = pokemonApi.results;

    for (const singlePokemonOBjects of pokemonArray) {
        
    fetch(singlePokemonOBjects.url)
    .then(res => res.json())
    .then(nestedPokemonApi => showAllPokemon(nestedPokemonApi))


    }
    
}

function showAllPokemon(nestedPokemonApi){
    const imgUrl = nestedPokemonApi.sprites.front_default;

    const img = document.createElement('img');

    img.src = imgUrl;
    img.width = 200;
    document.getElementById('display-pokemon').appendChild(img)


   
}


