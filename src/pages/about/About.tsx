import {useEffect, useState} from 'react'
import './About.scss'
import DexFrame from '../../components/DexDecoration/DexFrame/DexFrame'
import pokeball from '../../assets/pokemon.png'
import PokeListItem from '../../components/pokeListItem/PokeListItem'


const About = ({pokemons}:any)=> {

    const [sort_type, ChangeSortType] = useState("name")
    const [query_prefix, ChangeQueryPrefix] = useState("")
    const [sort_order, ChangeSortOrder] = useState(-1)


    const [filtered_pokemon, FilterPokemons] = useState([])



    useEffect(()=>{
    }, [pokemons])


    useEffect(()=>{
        if (sort_type === "name") {
            let local_filter_pokemon = pokemons.filter((element:any) => {
                let prefixed = query_prefix.trim().toLowerCase()
                let element_name = String(element.name).trim().toLowerCase()
                return prefixed.length > 0 && prefixed === element_name.substring(0, prefixed.length)
            })
            local_filter_pokemon.sort((a:any, b:any)=>{
                return (sort_order * String(a.name).trim().toLowerCase().localeCompare(String(b.name).trim().toLowerCase()))
            })
            FilterPokemons(local_filter_pokemon)
        } else if (sort_type === "id") {
            let local_filter_pokemon = pokemons.filter((element:any) => {
                let prefixed = query_prefix.trim().toLowerCase()
                let element_name = String(element.id).trim().toLowerCase()
                return prefixed.length > 0 && prefixed === element_name.substring(0, prefixed.length)
            })
            local_filter_pokemon = local_filter_pokemon.sort((a:any, b:any)=>{
                return sort_order * (parseInt(a.id) - parseInt(b.id))
            })
            FilterPokemons(local_filter_pokemon)
        // } else if (sort_type === "weight") {
        //     let local_filter_pokemon = pokemons.filter((element:any) => {
        //         let prefixed = query_prefix.trim().toLowerCase()
        //         let element_name = String(element.name).trim().toLowerCase()
        //         return prefixed.length === 0 || prefixed === element_name.substring(0, prefixed.length)
        //     })
        //     local_filter_pokemon = local_filter_pokemon.sort((a:any, b:any)=>{
        //         return sort_order * (parseInt(a.weight) - parseInt(b.weight))
        //     })
        //     FilterPokemons(local_filter_pokemon)
        } else {
            FilterPokemons(pokemons)
        }
    }, [pokemons, sort_type, query_prefix, sort_order])

    const handleOnChange = (event:any) => {
        ChangeQueryPrefix(event.target.value)
    }

    const handleOnClick = (event:string) => {
        ChangeSortType(event)
    }

    const handleChangeOrder = (event:number) => {
        ChangeSortOrder(event)
    }
    return (
        <div className="about_page">
            <DexFrame style={
                {
                    "position": "absolute",
                    "top": 0
                }
            }/>
            {/* <img src={pokeball} alt="pokeball" /> */}
            <div className="list_view">
                <div className="query_view">
                    <form>
                        <input type="text" className="input" onChange={handleOnChange}/>
                        <div className='text'>{pokemons.length} associated with {query_prefix}</div>
                        <div className="button_list">
                            <div className='button_container'>
                                <img src={pokeball} alt="pokeball" style={sort_type==="name" ? {"rotate": "-40deg"} : {}} />
                                <input type="submit" value="name" name="name" className="button" onClick={(event)=>{event.preventDefault();handleOnClick("name")}}/>
                            </div>
                            <div className='button_container'>
                                <img src={pokeball} alt="pokeball" style={sort_type==="id" ? {"rotate": "-40deg"} : {}} />
                                <input type="submit" value="id" name="id" className="button" onClick={(event)=>{event.preventDefault();handleOnClick("id")}}/>
                            </div>
                            {/* <div className='button_container'>
                                <img src={pokeball} alt="pokeball" style={sort_type==="weight" ? {"rotate": "-40deg"} : {}} />
                                <input type="submit" value="weight" name="weight" className="button" onClick={(event)=>{event.preventDefault();handleOnClick("weight")}}/>
                            </div> */}
                            <div className='button_container'>
                                <img src={pokeball} alt="pokeball" style={sort_order===1 ? {"rotate": "-40deg"} : {}} />
                                <input type="submit" value="ascending" name="ascending" className="button" onClick={(event)=>{event.preventDefault();handleChangeOrder(1)}}/>
                            </div>
                            <div className='button_container'>
                                <img src={pokeball} alt="pokeball" style={sort_order===-1 ? {"rotate": "-40deg"} : {}} />
                                <input type="submit" value="descending" name="descending" className="button" onClick={(event)=>{event.preventDefault();handleChangeOrder(-1)}}/>
                            </div>
                        </div>
                        <div className='text'>Sorting by {sort_type} in {sort_order===1? "ascending" : "descending"} order</div>
                    </form>
                </div>
                <div className="result_view">
                    {filtered_pokemon.map((element:any)=>{
                        console.log(element)
                        return (
                            <PokeListItem pokemon={element} key={element.id}/>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default About