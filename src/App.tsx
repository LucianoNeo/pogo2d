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
const speed = 5


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