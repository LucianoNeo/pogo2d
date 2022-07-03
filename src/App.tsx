import {BrowserRouter } from 'react-router-dom'
import UserContext from './contexts/userContext';
import { Router } from './Router';
import { useState ,useEffect, useRef} from 'react';
import { Pokemons} from './components/array.js'




const App = () => {

const numberPoke = useRef(150)
const [user,setUser] = useState('RED')
const [posGlobal, setPosGlobal] = useState({x:130,y:270})
const pokemonImg= useRef(`./assets/img/pokemon_catch/pokemon (${numberPoke.current}).gif`)
const pokeballs = useRef(5)
const pokemons = Pokemons

const pokemonBag = [{
    globalId:'999',
    id:'3',
    name:'Charmander',
    img:'./assets/img/sprites/001.png'
}]
const speed = 50



return(
    <BrowserRouter>
    <UserContext.Provider 
    value={{user, setUser,pokeballs,speed,posGlobal, setPosGlobal,pokemonImg, pokemons,numberPoke}}>
    <Router/>
    </UserContext.Provider>
    </BrowserRouter>
)

}

export default App;