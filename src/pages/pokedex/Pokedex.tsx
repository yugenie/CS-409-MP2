import {useEffect, useState} from 'react'
import './Pokedex.scss'
import DexFrame from '../../components/DexDecoration/DexFrame/DexFrame';
import PokeItem from '../../components/pokeItem/PokeItem';
import { type_to_color } from "../../utils/color_map";
import DexButton from '../../components/DexDecoration/DexButton/DexButton';
import pokeball from "../../assets/pokemon.png"

// const API_URL = "https://pokeapi.co/api/v2/"

const Pokedex = ({pokemons}:any)=> {

    const [indexLimit, setIndexLimit] = useState(0)
    const [currentType, setCurrentType] = useState("all")
    const [currentPokemons, setPokemons] = useState<any>([])

    const handleShowMore = (inc:number) => {
        if (indexLimit + inc < 0) {
            return
        } else if (indexLimit + inc + 20 > currentPokemons.length) {
            return
        }
        setIndexLimit(indexLimit + inc)
    }

    const handleType = (type:string) => {
        setCurrentType(type);
    }

    useEffect(()=>{
        setPokemons(pokemons)
    }, [pokemons])

    return (
        <div className='pokeDex'>
            <div className="title">POKEDEX</div>
            <div className="pokePanel">
                <DexFrame />
                <div className="panel_title">
                    PokeDex
                    <div className="subtitle">
                        <div className="panel_change_one" onClick={()=>handleShowMore(-1)}>
                            Previous
                        </div>
                        <div className="dex_range">{currentPokemons.filter((element:any)=>{
                                console.log(element)
                                let pokemon_type:any[] = []
                                element.types.forEach((element:any)=>(
                                    pokemon_type.push(element.type.name)
                                ))
                                return currentType === "all" || pokemon_type.includes(currentType)

                            }).length} / {currentPokemons.length}
                        </div>
                        <div className="panel_change_one" onClick={()=>handleShowMore(1)}>
                            Next
                        </div>
                    </div>
                </div>
                <div className="types">
                    {Array.from( type_to_color ).map(([key, val]) => {
                        return (
                            <DexButton key={key} pokemon_type={key} val={val} onClick={()=>{handleType(key)}}/>
                        )
                    })}
                    <DexButton key="all" pokemon_type="all" val={""} onClick={()=>{handleType("all")}}/>
                </div>
                <div className="current_type">
                    <img src={pokeball} alt="pokeball" />
                    <div className="type" style={{"backgroundColor": type_to_color.get(currentType)}}>
                        {currentType}
                    </div>
                </div>

            </div>
            <div className="pokedex_main y-mandatory">
                {currentPokemons.filter((element:any)=>{
                    let pokemon_type:any[] = []
                    element.types.forEach((element:any)=>(
                        pokemon_type.push(element.type.name)
                    ))
                    return currentType === "all" || pokemon_type.includes(currentType)

                }).slice(indexLimit, indexLimit + 20).map((pokemon:any, i:number)=> {
                    return (
                        <PokeItem key={i} pokemon={pokemon}/>
                    )
                })
                }
            </div>
        </div>
    )
}

export default Pokedex