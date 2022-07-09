import {BrowserRouter } from 'react-router-dom'
import UserContext from './contexts/userContext';
import { Router } from './Router';
import { useState ,useEffect, useRef} from 'react';
import { Pokemons} from './components/array.js'
import Utils from './utils';
import {SpeakerSimpleSlash,SpeakerHigh} from 'phosphor-react'


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
        number: thispokenumber,
        activespawn: true
    
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
const [speed,setSpeed] = useState(5)
const receivedBalls = useRef(1)
const [screenSize,setScreenSize]= useState({w:200,h:600})
const screenWidth = useRef(1)
const screenHeight = useRef(1)
const [charFace,setcharFace] = useState('./assets/img/oakface.png')
const [charSprite,setcharSprite] = useState('./assets/img/sprites/oak.png')
const [charName,setCharName] = useState('Prof. Carvalho')
const [charLevel,setLevel] = useState(99)
const [msgPokeball,setMsgPokeball]= useState(false)
let soundON = useRef(true)
const [soundIcon,setSoundIcon] = useState(<SpeakerSimpleSlash size={32}/>)
let started = useRef(false)
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
    value={{user, setUser,pokeballs,setPokeballs,speed,posGlobal, setPosGlobal,pokemonImg, pokemons,numberPoke,pokestopmap,setPksMap,pokemonmap,setPkmMap,walking,receivedBalls,screenSize,setScreenSize,screenWidth,screenHeight,setSpeed,charFace,setcharFace,charSprite,setcharSprite,charName,setCharName,charLevel,setLevel,soundON,setSoundIcon,soundIcon,started,msgPokeball,setMsgPokeball}}>
    <Router/>
    </UserContext.Provider>
    </BrowserRouter>
)

}

export default App;