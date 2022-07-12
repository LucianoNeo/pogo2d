import { SpeakerSimpleSlash } from 'phosphor-react';
import React, { useEffect, useRef, useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Pokemons } from './components/array.js';
import UserContext from './contexts/userContext';
import { Router } from './Router';
import Utils from './utils';


const App = () => {
    const utils = Utils()
    const numberPoke = useRef(150)
    const globalId = useRef(1)
    const [user, setUser] = useState('RED')
    const [posGlobal, setPosGlobal] = useState({ x: 130, y: 270 })
    const [pokestopmap, setPksMap] = useState([])
    let walking = useRef(false)
    const [pokemonmap, setPkmMap] = useState([])
    const pokemonImg = useRef(`./assets/img/pokemon_catch/pokemon (${numberPoke.current}).gif`)
    const [pokeballs, setPokeballs] = useState(5)
    const pokemons = Pokemons
    const [speed, setSpeed] = useState(5)
    const [pokemonIndex, setPokemonIndex] = useState()
    const receivedBalls = useRef(1)
    const [screenSize, setScreenSize] = useState({ w: 200, h: 600 })
    const screenWidth = useRef(1)
    const screenHeight = useRef(1)
    const [charFace, setcharFace] = useState('./assets/img/oakface.png')
    const [charSprite, setcharSprite] = useState('./assets/img/sprites/oak.png')
    const [charName, setCharName] = useState('Prof. Carvalho')
    const [charLevel, setLevel] = useState(99)
    const [pokemonBag, setPokemonBag] = useState([])
    const [msgPokeball, setMsgPokeball] = useState(false)
    let soundON = useRef(true)
    const [soundIcon, setSoundIcon] = useState(<SpeakerSimpleSlash size={32} />)
    let started = useRef(false)
    const pkmmap = []
    let music = useRef()
    const [data, setData] = useState(
        {
            users: [
                {
                    id: '1',
                    username: 'reduser',
                    password: 'redpass',
                    email: 'red@red.com',
                    charData: {
                        name: 'red',
                        avatar: '',
                        level: 1,
                        sprite:'./assets/img/sprites/red.png',
                        xp:0,
                        pokemonBag: [
                            {
                                globalID: '1',
                                name: 'charmander',
                                level: 1,
                                xp: 0,
                                number: 3,
                                imgbag: './assets/img/pokemon_catch/pokemon (3).gif',
                                cp: 500,
                                weight: 7,
                                height: 7,
                                type1: 'fire',
                                type2: null
                            }
                        ],
                        itemsBag: [
                            {
                                itemName: 'Pokebola',
                                itemQtd: 5,
                                img: './assets/img/pokeball.png'
                            },
                            {
                                itemName: 'Frambo',
                                itemQtd: 5,
                                img: './assets/img/frambo.png'
                            },
                            {
                                itemName: 'Caxi',
                                itemQtd: 5,
                                img: './assets/img/caxi.png'
                            },
                            {
                                itemName: 'Nanab',
                                itemQtd: 5,
                                img: './assets/img/nanab.png'
                            },
                        ]
                    }
                },
            ]
        }

    )
  
    
    const generatePokemonMap = () => {
        for (let i = 0; i < 200; i++) {
            let randompokenumber = (utils.random(1, 140))
            let pokemonNumber = randompokenumber + 1
            let imgNumber = utils.leftPad(pokemonNumber, 3)
            let newid = globalId.current
            globalId.current++
            let hastype2 = () => {
                if (pokemons[randompokenumber].types[1]) {
                    return pokemons[randompokenumber].types[1].type.name
                }
                else {
                    return null
                }
            }
            let newpoke =
            {
                id: `${newid}`,
                name: `${pokemons[randompokenumber].name[0].toUpperCase() + pokemons[randompokenumber].name.substring(1)}`,
                left: `${utils.random(80, 2000)}px`,
                top: `${utils.random(100, 4000)}px`,
                img: `url(./assets/img/sprites/${imgNumber}.png)`,
                number: randompokenumber,
                activespawn: true,
                imgbag: `./assets/img/pokemon_catch/pokemon (${randompokenumber}).gif`,
                cp: utils.random(10, 600),
                weight: ((pokemons[randompokenumber].weight * 0.1).toFixed(0)),
                height: ((pokemons[randompokenumber].height * 0.1).toFixed(2)),
                type1: pokemons[randompokenumber].types[0].type.name,
                type2: hastype2(),


            }
            pkmmap.push(newpoke)
        }
    }


    const pkspmap = []
    const generatePokestopMap = () => {
        for (let index = 0; index < 51; index++) {
            let newvalue =
            {
                id: index,
                left: `${utils.random(80, 2900)}px`,
                top: `${utils.random(100, 4900)}px`,
                spinned: false,
                img: 'url(./assets/img/pokestopblue.png)'
            }
            pkspmap.push(newvalue)
        }
    }


    useEffect(() => {
        generatePokemonMap()
        generatePokestopMap()
        setPkmMap(pkmmap)
        setPksMap(pkspmap)

    }, [])


    return (
        <BrowserRouter>
            <UserContext.Provider
                value={{ user, setUser, pokeballs, setPokeballs, speed, posGlobal, setPosGlobal, pokemonImg, pokemons, numberPoke, pokestopmap, setPksMap, pokemonmap, setPkmMap, walking, receivedBalls, screenSize, setScreenSize, screenWidth, screenHeight, setSpeed, charFace, setcharFace, charSprite, setcharSprite, charName, setCharName, charLevel, setLevel, soundON, setSoundIcon, soundIcon, started, msgPokeball, setMsgPokeball, globalId, pokemonBag, setPokemonBag, pokemonIndex, setPokemonIndex, music,data, setData }}>
                <Router />
            </UserContext.Provider>
        </BrowserRouter>
    )

}

export default App;