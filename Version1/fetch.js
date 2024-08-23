function loadData(){
    fetch('https://pokeapi.co/api/v2/pokemon/')
.then(res => res.json())
.then(pokemon => displayPokemon(pokemon))
}


function displayPokemon(pokemon){
const pokemons = pokemon.results;
for (const eachPokemon of pokemons) {
    console.log(eachPokemon.name)
}

}


function loadData2(){
    fetch('https://pokeapi.co/api/v2/pokemon/')
    .then(res => res.json())
    .then(pokemon => displayData(pokemon))
}

function displayData(pokemon){
    const array = pokemon.results;
    for (const eachData of array) {
        const nestedUrl = eachData.url;
        fetch(nestedUrl)
        .then(res => res.json())
        .then(data => showImg(data))
    }
}

function showImg(data){
    const imgUrl = data.sprites.front_default;
    console.log(imgUrl);
    const img = document.createElement('img');
    img.src = imgUrl;
    img.alt = "nigga";
    img.width = 300;
    document.getElementById('img-container').appendChild(img)
}




