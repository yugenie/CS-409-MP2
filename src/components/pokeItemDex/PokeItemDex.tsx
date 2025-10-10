import { useEffect } from "react"
import "./PokeItemDex.scss"
import DexFrame from "../DexDecoration/DexFrame/DexFrame";
import { Link } from "react-router-dom";

import { convertTypeColor } from "../../utils/color_map";
import { getFrontal, getShinyFrontal, getBack, getShinyBack} from "../../utils/get_image";

const PokeItemDex = ({pokemon} : any) => {
    console.log(pokemon)
    useEffect(()=>{
    });
    let pokemon_frontal = getFrontal(pokemon)
    let pokemon_shiny_frontal = getShinyFrontal(pokemon)
    let pokemon_back = getBack(pokemon)
    let pokemon_shiny_back = getShinyBack(pokemon)

    let pokemon_type:any[] = []
    pokemon.types.forEach((element:any)=>(
        pokemon_type.push(element.type.name)
    ))

    return (
        <div className="pokeItemDex_main" style={{"background": convertTypeColor(pokemon_type, false)}}>
            <DexFrame style={{
                "position": "absolute",
                "top": 0
            }}/>
            {
                pokemon.id === 1 ? null :
                <Link to={"/pokedex/" + String(pokemon.id-1)} className="route">&lt;</Link>
            }
            {
                pokemon.id === 1154 ? null :
                <Link to={"/pokedex/"+String(pokemon.id+1)} className="route">&gt;</Link>
            }
            <div className="frame">
                <div className="basic_info">
                    <div className="title">name: {pokemon.name}</div>
                    <div className="title">id: {pokemon.id}</div>
                    <div className="title">height: {pokemon.height}</div>
                    <div className="title">weight: {pokemon.weight}</div>
                    {pokemon.types.map((type:any, i:number) => {
                        return <div className="title" key={i}>type {i+1}: {type.type.name}</div>
                    })}
                </div>
                <div className="pokemon_images">
                    <img src={pokemon_frontal} alt="frontal"/>
                    <img src={pokemon_back} alt="back"/>
                    <img src={pokemon_shiny_frontal} alt="frontal_shiny"/>
                    <img src={pokemon_shiny_back} alt="back_shiny"/>
                </div>
                <div className="pokemon_stats">
                    {pokemon.stats.map((stat:any)=>{
                        return <div className="pokemon_stat" key={stat.stat.name}>{stat.stat.name} <br/> {stat.base_stat}</div>
                    })}
                </div>

            </div>
        </div>
    )
}

export default PokeItemDex;