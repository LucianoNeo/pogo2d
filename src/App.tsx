import {BrowserRouter } from 'react-router-dom'
import UserContext from './contexts/userContext';
import { Router } from './Router';
import { useState ,useEffect} from 'react';


const App = () => {

const [user,setUser] = useState('RED')
const [pokeballs,setPokeballs] = useState(5)
const [posGlobal, setPosGlobal] = useState({x:130,y:270})
const [ pokemonImg, setPokemonImg]= useState()
const [pokemons,setPokemon] = useState([])
const [numberPoke,setNumberPoke] = useState()
const pokemonBag = [{
    globalId:'999',
    id:'3',
    name:'Charmander',
    img:'./assets/img/sprites/001.png'
}]
const speed = 5
console.log(pokemons)


return(
    <BrowserRouter>
    <UserContext.Provider 
    value={{user, setUser,pokeballs,setPokeballs,speed,posGlobal, setPosGlobal,pokemonImg, setPokemonImg,pokemons,setPokemon,numberPoke,setNumberPoke}}>
    <Router/>
    </UserContext.Provider>
    </BrowserRouter>
)

}

export default App;