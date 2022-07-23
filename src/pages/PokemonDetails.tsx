import React from "react"
import { useRef } from "react"
import { useContext, useEffect, useMemo, useState } from "react"
import { useNavigate } from 'react-router-dom'
import CloseButton from "../components/CloseButton"
import UserContext from "../contexts/userContext"


function PokemonDetails(pokemon) {


    const { music,screenH, pokemonSelected } = useContext(UserContext)
   
   

    const navigate = useNavigate()
    const type1 = () => {
        switch (pokemonSelected[0].type1) {
            case 'fighting':
                return 'LUTADOR'
                break;
            case 'grass':
                return 'GRAMA'
            case 'water':
                return 'ÁGUA'
            case 'fire':
                return 'FOGO'
            case 'ghost':
                return 'FANTASMA'
            case 'fairy':
                return 'FADA'
            case 'rock':
                return 'PEDRA'
            case 'ground':
                return 'TERRA'
            case 'ice':
                return 'GELO'
            case 'dark':
                return 'SOMBRIO'
            case 'bug':
                return 'INSETO'
            case 'normal':
                return 'NORMAL'
            case 'dragon':
                return 'DRAGÃO'
            case 'electric':
                return 'ELÉTRICO'
            case 'poison':
                return 'VENENO'
            case 'steel':
                return 'AÇO'
            case 'flying':
                return 'VOADOR'
        }
    }

    const type2 = () => {
        switch (pokemonSelected[0].type2) {
            case null:
                return null
            case 'fighting':
                return 'LUTADOR'
                break;
            case 'grass':
                return 'GRAMA'
            case 'water':
                return 'ÁGUA'
            case 'fire':
                return 'FOGO'
            case 'ghost':
                return 'FANTASMA'
            case 'fairy':
                return 'FADA'
            case 'rock':
                return 'PEDRA'
            case 'ground':
                return 'TERRA'
            case 'ice':
                return 'GELO'
            case 'dark':
                return 'SOMBRIO'
            case 'bug':
                return 'INSETO'
            case 'normal':
                return 'NORMAL'
            case 'dragon':
                return 'DRAGÃO'
            case 'electric':
                return 'ELÉTRICO'
            case 'poison':
                return 'VENENO'
            case 'steel':
                return 'AÇO'
            case 'flying':
                return 'VOADOR'
        }
    }

  

    // if (isLoading) {
    //     return (
    //         <div id='tela' className='relative w-screen overflow-hidden m-auto sm:w-[300px] sm:rounded-[20px] sm:border-[10px] sm:border-black sm:h-[90vh] sm:max-h-[600px] flex flex-col items-center justify-center'
    //             style={{ height: `${screenH.current}vh`, background: 'white' }}></div>
    //     )
    // }

    return (
        <div id='tela' className='relative w-screen overflow-hidden m-auto sm:w-[300px] sm:rounded-[20px] sm:border-[10px] sm:border-black sm:h-[90vh] sm:max-h-[600px] flex flex-col items-center justify-center'
            style={{ height: `${screenH.current}vh`, background: 'linear-gradient(170deg, rgba(57,154,93,1) 20%, rgba(46,103,115,1) 83%)' }}

        >
            <div className="w-full h-[40%]  p-2 flex flex-col items-center text-center"
                style={{
                    backgroundImage: `url(./assets/img/types-bg/${pokemonSelected[0].type1}.png)`,
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    zIndex: 0,
                    opacity: 0.7
                }}
            >



            </div>
            <span className="text-white text-xs top-1 sm:top-1 left-2 absolute font-sans" >ID {pokemonSelected[0].id}</span>

         
            <span className="text-white text-2xl sm:text-lg top-16 sm:top-10 absolute " >LEVEL {pokemonSelected[0].level}</span>

            <div id='pokemonCP' className="flex pt-14 items-end absolute top-32 sm:translate-y-[-120px] translate-y-[-80px]">
                <span className="text-white text-lg sm:text-xs" >CP</span>
                <span className="text-white text-2xl sm:text-lg " >{pokemonSelected[0].cp}</span>

            </div>
            <img src={pokemonSelected[0].imgbag} alt="" 
                className='absolute translate-y-[-150px] sm:translate-y-[-100px] sm:w-[150px] w-[250px]'
                />
            <div className="w-full h-[65%] bg-white p-2 flex flex-col items-center pt-28 sm:pt-10">
                

                <p className="text-3xl sm:text-2xl text-green-900 "
                >{pokemonSelected[0].name}</p>

                <div id='dados' className="flex h-20 w-full px-5 py-2 items-center justify-center gap-5">

                    <div className="flex-col text-center text-xl sm:text-sm">
                        <p>{pokemonSelected[0].weight}kg</p>
                        <p className="text-sm sm:text-xs text-slate-400">PESO</p>
                    </div>

                    <div className="flex justify-between items-center pl-4 gap-3">
                        <div className="flex flex-col items-center justify-center text-center gap-1 sm:gap-0">
                            <img src={`./assets/img/types-icon/${pokemonSelected[0].type1}.png`} alt="" width={20} />
                            <p className="text-sm sm:text-xs text-slate-400 pt-1">{type1()}</p>
                        </div>
                        <div className="flex flex-col items-center justify-center text-center gap-1 sm:gap-0">
                            <img src={`./assets/img/types-icon/${pokemonSelected[0].type2}.png`} alt="" width={20} />
                            <p className="text-sm sm:text-xs text-slate-400 pt-1">{type2()}</p>
                        </div>

                    </div>
                    <div className="flex-col text-center text-xl sm:text-sm">
                        <p>{pokemonSelected[0].height}m</p>
                        <p className="text-sm sm:text-xs text-slate-400 ">ALTURA</p>
                    </div>

                </div>

                <hr className="text-slate-500 h-1 w-full " />

                <div
                    id='golpes'
                    className="w-full px-5 h-20  py-5 flex flex-col justify-evenly gap-2"
                >
                    <div className="flex justify-between">
                    <img src={`./assets/img/types-icon/${pokemonSelected[0].move1.type}.png`} alt="" width={20} />
                        <span className="text-sm sm:text-xs text-green-900">{pokemonSelected[0].move1.name.toUpperCase()}</span>
                        <span className="text-sm sm:text-xs text-green-900">{pokemonSelected[0].move1.power || 0}</span>
                    </div>
                    
                    <div className="flex justify-between">
                        <img src={`./assets/img/types-icon/${pokemonSelected[0].move2.type}.png`} alt="" width={20} />
                        <span className="text-sm sm:text-xs text-green-900">{pokemonSelected[0].move2.name.toUpperCase()}</span>
                        <span className="text-sm sm:text-xs text-green-900">{pokemonSelected[0].move2.power || 0}</span>
                    </div>
                </div>

                <hr className="text-slate-500 h-1 w-full" />

                <div className="bg-blue-100 py-5 px-5 gap-2 w-full rounded-lg mt-2 flex justify-between items-center">
                    <div className="gap-2 flex flex-col">
                        <p className="text-slate-500 text-sm sm:text-xs">
                            Capturado Selvagem
                        </p>
                        <p className="text-slate-500 text-sm sm:text-xs">
                            {pokemonSelected[0].captureDate}
                        </p>
                    </div>
                    <div>
                        <img src="./assets/img/pokeball_catch.png" alt="" width={30} />
                    </div>
                </div>

                <div className="flex w-full items-center justify-center">
                    <div className="absolute bottom-6">
                        <CloseButton onclick={() => { return navigate('/pkbag'), music.current.pause() }} />
                    </div>
                </div>


            </div>

        </div>

    )
}

export default PokemonDetails