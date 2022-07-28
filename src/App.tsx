import { SpeakerHigh } from 'phosphor-react';
import React, { useEffect, useRef, useState } from 'react';
import { BrowserRouter, MemoryRouter } from 'react-router-dom';
import { Pokemons } from './components/array.js';
import UserContext from './contexts/userContext';
import { Router } from './Router';
import Utils from './utils';
import { Movesets } from './components/movesets.js';
import axios from 'axios';

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
    const movesets = Movesets
    const [speed, setSpeed] = useState(5)
    const [pokemonIndex, setPokemonIndex] = useState()
    const receivedBalls = useRef(1)
    const [screenSize, setScreenSize] = useState({ w: 200, h: 600 })
    const screenWidth = useRef(1)
    const screenHeight = useRef(1)
    const [charFace, setcharFace] = useState('./assets/img/oakface.png')
    const [charSprite, setcharSprite] = useState('./assets/img/sprites/oak.png')
    const [charName, setCharName] = useState('Prof. Carvalho')
    const [charLevel, setLevel] = useState(1)
    const [pokemonBag, setPokemonBag] = useState([])
    const [itensBag, setItensBag] = useState([{
        pokeball: {
            img: './assets/img/pokeball_catch.png',
            quantity: 5,
            captureChance: 0.3,
        },
        greatball: {
            img: './assets/img/greatball.png',
            quantity: 0,
            captureChance: 0.45,
        },
        ultraball: {
            img: './assets/img/ultraball.png',
            quantity: 0,
            captureChance: 0.6,
        }
    }])

    const [pokemonSelected, setPokemonSelected] = useState({})
    const [msgPokeball, setMsgPokeball] = useState(false)
    let soundON = useRef(true)
    const [soundIcon, setSoundIcon] = useState(<SpeakerHigh size={32} />)
    let started = useRef(false)
    const pkmmap = []
    let music = useRef()

    let screenH = useRef(100)
    const [move1Details, setMVD] = useState()


    let details = navigator.userAgent;
    let regexp = /iphone/i;
    let isMobileDevice = regexp.test(details);
    if (isMobileDevice) {
        screenH.current = 85
    }



    globalId.current = Number(localStorage.getItem('globalId'))

    const generatePokemonMap = () => {
        for (let i = 0; i < 150; i++) {
            let randompokenumber = (utils.random(1, 140))
            let pokemonNumber = randompokenumber + 1
            let imgNumber = utils.leftPad(pokemonNumber, 3)
            let newid = globalId.current
            localStorage.setItem('globalId', newid.toString())
            const captureDate = new Date()
            const formatedDate = ((captureDate.getDate())) + "/" + ((captureDate.getMonth() + 1)) + "/" + captureDate.getFullYear();
            globalId.current++

            let hastype2 = () => {
                if (pokemons[randompokenumber].types[1]) {
                    return pokemons[randompokenumber].types[1].type.name
                }
                else {
                    return null
                }
            }

            let move1 = {}
            const getMove1 = (() => {
                if (pokemons[randompokenumber].moves[0].move) {
                    move1 = pokemons[randompokenumber].moves[0].move

                } else {
                    return null
                }
            })()




            let move2
            const getMove2 = (() => {
                if (pokemons[randompokenumber].moves[1]) {
                    const moveId = pokemons[randompokenumber].moves[1].move.url.replace("https://pokeapi.co/api/v2/move/", '').replace('/', '')
                    move2 = {
                        name: pokemons[randompokenumber].moves[1].move.name,
                        type: movesets[Number(moveId - 1)].type.name,
                        id: moveId,
                        accuracy: movesets[Number(moveId - 1)].accuracy,
                        power: movesets[Number(moveId - 1)].power,
                        pp: movesets[Number(moveId - 1)].pp,

                    }

                } else {
                    move2 = null
                }
            })()

            const moveId = pokemons[randompokenumber].moves[0].move.url.replace("https://pokeapi.co/api/v2/move/", '').replace('/', '')


            async function getCaptureRate() {

                const response = await axios.get(`https://pokeapi.co/api/v2/pokemon-species/${randompokenumber}`)
                const resultado = await response.data.capture_rate
                return resultado

            }

            async function createNewPokemon() {


                let newpoke =
                {
                    id: `${newid}`,
                    name: `${pokemons[randompokenumber].name[0].toUpperCase() + pokemons[randompokenumber].name.substring(1)}`,
                    left: `${utils.random(80, 2900)}px`,
                    top: `${utils.random(100, 4900)}px`,
                    img: `url(./assets/img/sprites/${imgNumber}.png)`,
                    number: randompokenumber,
                    activespawn: true,
                    imgbag: `./assets/img/pokemon_catch/pokemon (${randompokenumber + 1}).gif`,
                    cp: utils.random(10, 600),
                    weight: ((pokemons[randompokenumber].weight * 0.1).toFixed(0)),
                    height: ((pokemons[randompokenumber].height * 0.1).toFixed(2)),
                    type1: pokemons[randompokenumber].types[0].type.name,
                    type2: hastype2(),
                    level: utils.random(1, Number(charLevel + 4)),
                    captureDate: formatedDate,
                    move1: {
                        name: move1.name,
                        type: movesets[Number(moveId - 1)].type.name,
                        id: moveId,
                        accuracy: movesets[Number(moveId - 1)].accuracy,
                        power: movesets[Number(moveId - 1)].power,
                        pp: movesets[Number(moveId - 1)].pp,
                    },
                    move2: move2,
                    baseStats: {
                        hp: pokemons[randompokenumber].stats[0].base_stat,
                        attack: pokemons[randompokenumber].stats[1].base_stat,
                        defense: pokemons[randompokenumber].stats[2].base_stat,
                        captureRate: await getCaptureRate()
                    }
                }
                console.log(newpoke)
                pkmmap.push(newpoke)
            }
            createNewPokemon()
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
        <MemoryRouter>
            <UserContext.Provider
                value={{ user, setUser, pokeballs, setPokeballs, speed, posGlobal, setPosGlobal, pokemonImg, pokemons, numberPoke, pokestopmap, setPksMap, pokemonmap, setPkmMap, walking, receivedBalls, screenSize, setScreenSize, screenWidth, screenHeight, setSpeed, charFace, setcharFace, charSprite, setcharSprite, charName, setCharName, charLevel, setLevel, soundON, setSoundIcon, soundIcon, started, msgPokeball, setMsgPokeball, globalId, pokemonBag, setPokemonBag, pokemonIndex, setPokemonIndex, music, screenH, pokemonSelected, setPokemonSelected, itensBag, setItensBag }}>
                <Router />
            </UserContext.Provider>
        </MemoryRouter>
    )

}

export default App;