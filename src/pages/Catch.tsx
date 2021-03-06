import React, { memo, useContext, useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import bg from '../../public/assets/img/bg.png';
import Popup from '../components/Popup';
import UserContext from '../contexts/userContext';
const soundError = new Audio("./assets/sfx/error.mp3")
const soundPokeball = new Audio("./assets/sfx/pokeball.mp3")
const soundPokeballWobble = new Audio("./assets/sfx/pokeball-wobble.mp3")
const soundRunning = new Audio("./assets/sfx/running.mp3")
const soundCatching = new Audio("./assets/sfx/catching.mp3")




function Catch() {
    const navigate = useNavigate()
    const capturing = useRef(false)
    const { pokeballs, pokemonImg, pokemons, numberPoke, setPokeballs, setMsgPokeball, pokemonBag, setPokemonBag, pokemonmap, pokemonIndex, music, soundON, screenH } = useContext(UserContext)
    const [effect, setEffect] = useState(false);

    useEffect(() => {
        music.current.pause()
        music.current = new Audio("./assets/music/catch.mp3")
        if (soundON.current) {
            music.current.play()
        }
        music.current.volume = 0.3
    }, [])

    return (
        <>
            <div style={{ height: `${screenH.current}vh`, backgroundImage: `URL(${bg})` }} id='tela' className='relative w-screen  overflow-hidden m-auto sm:w-[300px] sm:rounded-[20px] sm:border-[10px] sm:border-black sm:h-[90vh] bg-[url("./assets/img/bg.png")] bg-cover flex justify-center sm:max-h-[600px]'
            >
                <Popup text='Você está sem pokebolas' />
                <div className='w-full h-20 flex justify-end p-4'>
                    <img id='runButton' src="./assets/img/running.png" draggable='false' alt=""
                        className='w-14 h-14 cursor-pointer hover:scale-125 z-10'
                        onClick={() => {
                            setMsgPokeball(false)
                            music.current.volume = 0.08
                            soundRunning.play()
                            music.current.pause()
                            return navigate('/world')
                        }}
                    />
                </div>

                <div id='catch' style={{ position: 'absolute', display: 'none' }} className='text-3xl font-extrabold text-gray-500 bottom-[400px] animate-fadeinscale scale-150'>GOTCHA!</div>

                <div id='pokesprite' className='absolute  bottom-[300px] w-60 text-center items-center justify-center flex flex-col sm:bottom-[300px]'>
                    <div className='flex bg-slate-600 text-white rounded-full px-3 py-2 min-w-fit gap-2 opacity-80'>
                        <div className=' flex h-6 items-center justify-center w-3'>
                            <img src="./assets/img/pokeball-icon-white.jpg" alt="" />
                        </div>
                        <h1 className=''>{pokemons[numberPoke.current].name[0].toUpperCase() + pokemons[numberPoke.current].name.substring(1)}
                        </h1>
                        <p>/</p>
                        <p className='text-xs flex items-center font-sans font-bold'>CP</p>
                        <p>{pokemonmap[pokemonIndex].cp}</p>
                    </div>
                    <img src={pokemonImg.current} draggable='false' alt="" style={{ width: '160px', imageRendering: 'pixelated' }} />
                </div>


                <div id='menu' className=' w-[95%] h-28 absolute bottom-10 m-auto drop-shadow-lg flex flex-col items-center justify-center text-center'>
                    <img id='pokeballsprite' src="./assets/img/pokeball_catch.png" draggable='false' alt="" className={`${effect && "animate-pokeball-throw"} absolute bottom-10 w-20 `}
                        onClick={() => {
                            if (!capturing.current) {
                                capturing.current = true

                                const pokeSprite = document.getElementById('pokesprite')
                                const pokeballSprite = document.getElementById('pokeballsprite')
                                const catchtext = document.getElementById('catch')
                                if (pokeballs > 0) {
                                    setEffect(true);
                                    if (soundON.current) {
                                        soundPokeball.play()
                                    }
                                    setPokeballs(pokeballs - 1)

                                    setTimeout(() => {
                                        if (soundON.current) {
                                            soundCatching.play()
                                        }
                                        pokeSprite.style = 'display:none'
                                    }, 1200)
                                    const runningbutton = document.getElementById('runButton')
                                    runningbutton.style.display = 'none'
                                    setEffect(true);
                                    setTimeout(() => {
                                        setEffect(false)
                                        pokeballSprite.style = 'bottom: 300px ;width: 40px;transform: rotate(-10deg)'


                                    }, 1900);
                                    setTimeout(() => {
                                        if (soundON.current) {
                                            soundPokeballWobble.play()
                                        }
                                        pokeballSprite.style = 'bottom: 300px ;width: 40px;transform: rotate(-30deg)'
                                    }, 2500)
                                    setTimeout(() => {
                                        pokeballSprite.style = 'bottom: 300px ;width: 40px;transform: rotate(30deg)'
                                    }, 3300)
                                    setTimeout(() => {
                                        pokeballSprite.style = 'bottom: 300px ;width: 40px;transform: rotate(-30deg)'
                                    }, 4100)
                                    setTimeout(() => {
                                        catchtext.style.display = 'block'
                                    }, 4000)
                                    setTimeout(() => {
                                        music.current.pause()
                                        music.current = new Audio("./assets/music/captured.mp3")
                                        if (soundON.current) {
                                            music.current.volume = 0.08
                                            music.current.play()
                                        }

                                    }, 4100)
                                    setTimeout(() => {
                                        music.current.pause()
                                        capturing.current = false
                                        return navigate('/world')
                                    }, 8800)

                                    let newCatch = pokemonmap[pokemonIndex]
                                    setPokemonBag(prevState => [...prevState, newCatch])
                                    localStorage.removeItem("pokemonbag");
                                    localStorage.setItem("pokemonbag", JSON.stringify(pokemonBag));
                                }
                                else {
                                    capturing.current = false
                                    soundError.play()
                                    setMsgPokeball(true)
                                    setTimeout(() => {
                                        setMsgPokeball(false)
                                    }, 3000);
                                }
                            }
                        }
                        }
                    />
                    <h1 className='absolute bottom-1 text-white  text-2xl'>{pokeballs} x</h1>
                </div>
            </div>
        </>
    )

}

export default memo(Catch)