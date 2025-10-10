import pokeball from "../assets/pokemon.png"
const getFrontal = (pokemon:any)=> {
    const sprites_ = pokemon.sprites
    let pokemon_image_url = pokeball
    if (sprites_.front_default !== null) {
        pokemon_image_url = sprites_.front_default
    } else if (sprites_.other.home.front_default != null){
        pokemon_image_url = sprites_.front_default
    } else if (sprites_.other["official-artwork"].front_default != null) {
        pokemon_image_url = sprites_.other["official-artwork"].front_default
    } else {
        pokemon_image_url = pokeball
    }
    return pokemon_image_url
}

const getShinyFrontal = (pokemon:any)=> {
    const sprites_ = pokemon.sprites
    let pokemon_image_url = pokeball
    if (sprites_.front_shiny !== null) {
        pokemon_image_url = sprites_.front_shiny
    } else if (sprites_.other.home.front_shiny != null){
        pokemon_image_url = sprites_.front_shiny
    } else {
        pokemon_image_url = pokeball
    }
    return pokemon_image_url
}

const getBack = (pokemon:any)=> {
    const sprites_ = pokemon.sprites
    let pokemon_image_url = pokeball
    if (sprites_.back_default !== null) {
        pokemon_image_url = sprites_.back_default
    } else {
        pokemon_image_url = pokeball
    }
    return pokemon_image_url
}

const getShinyBack = (pokemon:any)=> {
    const sprites_ = pokemon.sprites
    let pokemon_image_url = pokeball
    if (sprites_.back_shiny !== null) {
        pokemon_image_url = sprites_.back_shiny
    } else {
        pokemon_image_url = pokeball
    }
    return pokemon_image_url
}
export {getFrontal, getShinyFrontal, getBack, getShinyBack}