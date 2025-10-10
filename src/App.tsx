import React, { useEffect, useState } from 'react';
import './index.scss';
import Main from './pages/main/Main';
import About from './pages/about/About';
import Pokedex from './pages/pokedex/Pokedex';
import PokeItemDex from './components/pokeItemDex/PokeItemDex';
import {
  HashRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';

import axios from 'axios';

const App = () => {
    const [allPokemons, setPokemons] = useState<any>([])
    const getPokemons = async () => {
        try {
            const url = "https://pokeapi.co/api/v2/pokemon/?offset=0&limit=1200"
            const res = await axios.get(url);
            const data = res.data.results
            let pokemons:any = []
            for (let i = 0; i < data.length; i++) {
                const pokemon = await axios.get(data[i].url)
                let pokemon_data = pokemon.data
                pokemon_data["id"] = i + 1
                pokemon_data["api"] = data[i].url
                pokemons.push(pokemon_data)
            }
            setPokemons(pokemons)
        } catch(e) {
            console.log(e)
        }
    }

    useEffect(()=>{
        getPokemons()
    }, [])

    return (
        <Router basename="/CS-409-MP2">
            <Routes>
                <Route index element={<Main pokemon={allPokemons}/>} />
                <Route path="/about" element={<About pokemons={allPokemons}/>} />
                <Route path="/pokedex" element={<Pokedex pokemons={allPokemons}/>} />
                {
                    allPokemons.map((element:any) => {
                        return <Route key={element.id} path={"/pokedex/" + element.id.toString()} element={<PokeItemDex pokemon={element} />} />
                    })
                }
            </Routes>
        </Router>
    )
}

export default App