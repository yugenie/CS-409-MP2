import "./PokeItem.scss"
import { Link } from "react-router-dom";
import pokeball from "../../assets/pokemon.png"

import { convertTypeColor } from "../../utils/color_map";

const PokeItem = (props:any) => {
    
    const pokemon = props.pokemon
    const url_id = pokemon.id
    let pokemon_type:any[] = []
    pokemon.types.forEach((element:any)=>(
        pokemon_type.push(element.type.name)
    ))

    const name = pokemon.name
    let pokemon_image_url = ""
    const sprites_ = pokemon.sprites
    if (sprites_.front_default != null) {
        pokemon_image_url = sprites_.front_default
    } else if (sprites_.other.home.front_default != null){
        pokemon_image_url = sprites_.front_default
    } else if (sprites_.other["official-artwork"].front_default != null) {
        pokemon_image_url = sprites_.other["official-artwork"].front_default
    } else {
        pokemon_image_url = pokeball
    }

    return (
        <Link to={"/pokedex/"+url_id} className="pokeItem_main" style={{"background": convertTypeColor(pokemon_type, true)}}>
            <div className="background" style={{"background": convertTypeColor(pokemon_type, false)}}></div>
            <div className="pokemon_name">
                NO.{url_id} {name.toUpperCase()}
            </div>
            <div className="pokemon_img">
                <img src={pokemon_image_url}  alt={name}/>
            </div>
        </Link>
    )
}

export default PokeItem;