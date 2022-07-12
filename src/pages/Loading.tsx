
import { useState,useContext,useEffect } from 'react';
import UserContext from '../contexts/userContext';
import { useNavigate   } from 'react-router-dom'
import axios from 'axios'
import Social from '../components/Social';
import React from 'react';




function Loading() {

    const {setcharFace,setcharSprite,setCharName,setLevel,setPokemonBag,setPokeballs}= useContext(UserContext)

const navigate = useNavigate()
const username = localStorage.getItem('username')
const sprite = localStorage.getItem('sprite')
const avatar = localStorage.getItem('avatar')
const level = localStorage.getItem('level')
const loadedBag = localStorage.getItem('pokemonbag')
const pokemonbag = JSON.parse(loadedBag)
const pokeballsQty = localStorage.getItem('pokeballsQty')

useEffect(() => {
    if (username){
    setCharName(username)
    setcharFace(avatar)
    setcharSprite(sprite)
    setLevel(level)
    setPokemonBag(pokemonbag)
    setPokeballs(pokeballsQty)
    setTimeout(() => {
        return navigate('/continue')
    }, 5000);
}else{
setTimeout(() => {
    return navigate('/char-select')
}, 5000);
}}, [])


    return(
        <div id='tela' className='relative w-screen h-[100vh] overflow-hidden bg-white m-auto sm:w-[300px] sm:rounded-[20px] sm:border-[10px] sm:border-black sm:h-[90vh] flex flex-col items-center justify-evenly sm:max-h-[600px]'>
        <div className='items-center flex flex-col justify-center'>
        <img src="./assets/img/NEO1.jpg" alt="" className='rounded-full w-20 h-20' />
       <h1 className="text-2xl text-center animate-fadein mt-5">Desenvolvido por LucianoNeo</h1>
       </div>
       <Social/>
       <h1>v0.8</h1>
    </div>
    )
    
}

export default Loading