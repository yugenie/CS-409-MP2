import "./PokeListItem.scss"
import { Link } from "react-router-dom";
import { getFrontal } from "../../utils/get_image";

const PokeListItem = ({pokemon} : any) => {
    let pokemon_image_url = getFrontal(pokemon)
    return (
        <Link to={"/pokedex/"+String(pokemon.id)} className="pokeListItem_main">
            {pokemon.id}. {pokemon.name}
            <img src={pokemon_image_url} alt="pokemon" />
        </Link>
    )
}

export default PokeListItem;