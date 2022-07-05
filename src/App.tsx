import {BrowserRouter } from 'react-router-dom'
import UserContext from './contexts/userContext';
import { Router } from './Router';
import { useState ,useEffect, useRef} from 'react';
import { Pokemons} from './components/array.js'
import Utils from './utils';



const App = () => {
const utils = Utils()

const pkmmap = []
const generatePokemonMap = ()=>{
   for (let i = 0; i < 201; i++) {
    let thispokenumber = utils.random(1,140)
    let newpoke = 
    {
        id: i,
        left:`${utils.random(80,2900)}px`, 
        top:`${utils.random(100,4900)}px`,
        img: `url(./assets/img/sprites/${utils.leftPad(thispokenumber,3)}.png)`,
        number: thispokenumber
    
    }    
    pkmmap.push(newpoke)
   }
}


const pkspmap = []
const generatePokestopMap = ()=>{
   for (let index = 0; index < 201; index++) {
    let newvalue = 
    {
        id: index,
        left:`${utils.random(80,2900)}px`, 
        top:`${utils.random(100,4900)}px`,
        spinned: false,
        img: 'url(./assets/img/pokestopblue.png)'
    }    
    pkspmap.push(newvalue)
   }
}

generatePokemonMap()
generatePokestopMap()

const numberPoke = useRef(150)
const [user,setUser] = useState('RED')
const [posGlobal, setPosGlobal] = useState({x:130,y:270})
const [pokestopmap,setPksMap] = useState([])
let walking = useRef(false)
const [pokemonmap,setPkmMap] = useState([])
const pokemonImg= useRef(`./assets/img/pokemon_catch/pokemon (${numberPoke.current}).gif`)
const [pokeballs,setPokeballs] = useState(5)
const pokemons = Pokemons
const speed = 30
const receivedBalls = useRef(1)


const pokemonBag = [{
    globalId:'999',
    id:'3',
    name:'Charmander',
    img:'./assets/img/sprites/001.png'
}]


useEffect(() => {
    setPkmMap(pkmmap)
    setPksMap(pkspmap)
    
}, [])


return(
    <BrowserRouter>
    <UserContext.Provider 
    value={{user, setUser,pokeballs,setPokeballs,speed,posGlobal, setPosGlobal,pokemonImg, pokemons,numberPoke,pokestopmap,setPksMap,pokemonmap,walking,receivedBalls}}>
    <Router/>
    </UserContext.Provider>
    </BrowserRouter>
)

}

export default App;