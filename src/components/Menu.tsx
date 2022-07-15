
import pokeball from '../../public/assets/img/pokeball.png'
import { useContext, useEffect, useRef, useState } from 'react'
import UserContext from '../contexts/userContext'
import PokemonBagButton from './PokemonBagButton'
import PokemonItemsButton from './PokemonItemsButton'
import { useNavigate } from 'react-router-dom'
import React from 'react'





function Menu() {
    const navigate = useNavigate()
    const [pokeballMenuOpen, setpokeballMenuOpen] = useState(false)
    const soundSelect = new Audio("./assets/sfx/select.mp3")
    const nearby = useRef(null)
    const { receivedBalls, screenHeight, charFace, charName, charLevel, pokemonmap } = useContext(UserContext)

    function openPokemonBag() {
        return navigate('/pkbag')
    }

    function openItemsBag() {
        return navigate('/itbag')
    }


     useEffect(() => {
        const nearbyCalc = () => {
            return pokemonmap.filter((filtrado) => filtrado.activespawn == true)
        }
        nearby.current = nearbyCalc()
    }, [])

  

    if (!nearby.current) {
        return <></>
    }

    return (
        <div className='w-full h-16 absolute bottom-16 z-30 px-2 justify-between flex items-center '>

            <div id='charFace' className='w-20 border-4 border-yellow-100 rounded-full h-20 overflow-hidden bg-gray-500'
                style={{ userSelect: 'none', WebkitUserSelect: 'none' }}
            >
                <img src={charFace} draggable='false' alt="" />

            </div>

            <div id='progressBar' className="absolute w-28 bg-gray-200 rounded-full h-3 dark:bg-gray-700 bottom-[-18px] border-[1px] border-gray-500">
                <div className="bg-blue-600 h-[10.1px] rounded-full w-[10%]"></div>
            </div>

            <div id='charName' className='absolute bottom-[-40px] left-2'
                style={{ userSelect: 'none', WebkitUserSelect: 'none' }}>
                <h1 className='text-white text-md drop-shadow-md'>{charName}</h1>
            </div>

            <div id='level' className='absolute bottom-[-9px] left-1'>
                <h1 className='text-white text-4xl font-extrabold '>{charLevel}</h1>
            </div>

            <div id='pokeball-menu' className={`w-full h-16 bottom-16 absolute items-center justify-center px-32 sm:px-20 animate-fadeinmenu scale-150 hidden gap-5`}>
                <PokemonBagButton onclick={openPokemonBag} />
                <PokemonItemsButton onclick={openItemsBag} />

            </div>

            <div id='pokeball' className='w-16 ml-14'>
                <img src={pokeball} alt="" draggable='false' className='cursor-pointer '
                    onClick={() => {
                        soundSelect.play()
                        if (!pokeballMenuOpen) {
                            setpokeballMenuOpen(true)

                            document.getElementById('pokeball-menu').style.display = 'flex'
                        } else {
                            soundSelect.play()
                            setpokeballMenuOpen(false)
                            document.getElementById('pokeball-menu').style.display = 'none'

                        }

                    }}
                />

            </div>
            <div id='itemsShow' className={`absolute animate-fadein-out w-full right-2 hidden`}
                style={{ top: `-${screenHeight.current / 2}px` }}>
                <img id='pokeballsprite' src="./assets/img/pokeball_catch.png" draggable='false' alt=""
                    className='absolute bottom-16 w-7 right-10' />
                <h1 className='text-white text-2xl font-extrabold drop-shadow-2xl shadow-black absolute bottom-16 w-6 right-2'>+{receivedBalls.current}</h1>
            </div>

            <div id='nearby' className='w-28 bg-white h-10 sm:h-8 rounded-2xl sm:translate-x-6 translate-x-7 opacity-70 flex   overflow-hidden pl-2 gap-1'>
                {nearby.current.map((pokemon) =>

                    <div className="flex items-center brightness-0 sm:min-w-[20px] min-w-[24px]  ">
                        <img src={pokemon.imgbag} alt='' draggable='false' style={{ margin: '0 auto' }} />
                    </div>

                )}


            </div>
        </div>
    )

}


export default Menu