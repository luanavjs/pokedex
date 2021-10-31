const poke_container = document.getElementById('poke_container')
const pokemon_number = 151


const fetchPokemons = async () => {
    for(let i = 1; i < pokemon_number; i++) {
        await getPokemon(i)
    }
}


const getPokemon = async (id) => {
    const url = 'https://pokeapi.co/api/v2/pokemon/'+id.toString()
    const res = await fetch(url)
    const pokemon = await res.json()
    createPokemonCard(pokemon)
}

const createPokemonCard = (pokemon) => {
    const {name, types, sprites, id} = pokemon
    const type = types[0].type.name
    const pokemonEl = document.createElement('div')
    pokemonEl.classList.add('pokemon')
    pokemonEl.classList.add('grow')
    const pokeInnerHtml = `
        <div class="img-container">
            <img src='${sprites.front_default}' alt='imagen del pokemon'/>
        </div>
        <div class="info">
            <span class="number">${id}</span>
            <h3 class="name">${name}</h3>
            <p class="type">${type}</p>
        </div>`
    pokemonEl.innerHTML = pokeInnerHtml
    poke_container.appendChild(pokemonEl)
}


fetchPokemons()