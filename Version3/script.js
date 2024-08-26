const pokemonContainer = document.getElementById('pokemon-container')


const loadData = async () =>{
    const res = await fetch('https://pokeapi.co/api/v2/pokemon?limit=1000');
    const data = await res.json();
    const pokemons = data.results
    
    pokemons.forEach(pokemon => {
        

        const pokemonDatas = pokemon.url;
        fetch(pokemonDatas)
        .then(res => res.json())
        .then(pokemonData => displayPokemon(pokemonData))
    });
}

const displayPokemon = (pokemonData) =>{
    // console.log(pokemonData);

    const pokemonCard = document.createElement('div');

    pokemonCard.classList = `card bg-base-200 w-40 m-2 shadow-xl hover:bg-base-300`;

    pokemonCard.innerHTML = `
    
    <a onclick="showStats('${pokemonData.id}')" >
    <figure class>
              <img class="w-full" 
                src=${pokemonData.sprites.
                    front_default
                    }
                alt="pokemon" />
    </figure>
    </a>
            
    `
    pokemonContainer.appendChild(pokemonCard)

}


// show stats fetch single single pokemon through id

const showStats = async (id) =>{
    // console.log(id);

    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
    const data = await res.json();
    console.log(data);

    showStatsDetails(data)
}



// modal datas

const showStatsDetails = (pokemon) =>{
    my_modal_5.showModal();

    const name = document.getElementById('name');
    name.innerText = `${pokemon.name}`

    const id = document.getElementById('id');
    id.innerText = `${pokemon.id}`

    const progress = document.getElementById('progress');


    // progress.classList = `flex flex-col justify-center items-center gap-3`

    progress.innerHTML = `
        <img src=${pokemon.sprites.
            front_default} >
            <h1 class="font-bold">Type: <span>${pokemon.types[0].type.name}</span></h1>
        <div class="flex justify-center items-center gap-2">
            <h1>HP  :</h1>
            <h1>${pokemon.stats[0].base_stat}</h1>
            <progress class="progress progress-success w-56" value="${pokemon.stats[0].base_stat}" max="400"></progress>
        </div>
        <div class="flex justify-center items-center gap-2">
            <h1>Atk :</h1>
            <h1>${pokemon.stats[1].base_stat}</h1>
            <progress class="progress progress-success w-56" value="${pokemon.stats[1].base_stat}" max="400"></progress>
        </div>
        <div class="flex justify-center items-center gap-2">
            <h1>Def :</h1>
            <h1>${pokemon.stats[2].base_stat}</h1>
            <progress class="progress progress-success w-56" value="${pokemon.stats[2].base_stat}" max="400"></progress>
        </div>
        <div class="flex justify-center items-center gap-2">
            <h1>S.atk :</h1>
            <h1>${pokemon.stats[3].base_stat}</h1>
            <progress class="progress progress-success w-56" value="${pokemon.stats[3].base_stat}" max="400"></progress>
        </div>
        <div class="flex justify-center items-center gap-2">
            <h1>S.def :</h1>
            <h1>${pokemon.stats[4].base_stat}</h1>
            <progress class="progress progress-success w-56" value="50" max="400"></progress>
        </div>
        <div class="flex justify-center items-center gap-2">
            <h1>Speed:</h1>
            <h1>${pokemon.stats[5].base_stat}</h1>
            <progress class="progress progress-success w-56" value="50" max="400"></progress>
        </div>
    
    `


} 




loadData()