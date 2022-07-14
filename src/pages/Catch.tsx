import React, { useContext,memo, useState,useEffect,useRef } from 'react'
import bg from '../../public/assets/img/bg.png'
import UserContext from '../contexts/userContext';
import {useNavigate} from 'react-router-dom'
import Popup from '../components/Popup';
import { Play } from 'phosphor-react';
const soundError = new Audio("./assets/sfx/error.mp3")
const soundPokeball = new Audio("./assets/sfx/pokeball.mp3")
const soundPokeballWobble = new Audio("./assets/sfx/pokeball-wobble.mp3")
const soundRunning = new Audio("./assets/sfx/running.mp3")
const soundCatching = new Audio("./assets/sfx/catching.mp3")

 
 
   
function Catch() {
    const navigate = useNavigate()
    const capturing = useRef(false)
    const {pokeballs,pokemonImg,pokemons,numberPoke,setPokeballs,setMsgPokeball,pokemonBag,setPokemonBag,pokemonmap,pokemonIndex,music,soundON,screenH}= useContext(UserContext)
    const [effect, setEffect] = useState(false);
  
    useEffect(() => {
        music.current.pause()
        music.current = new Audio("./assets/music/catch.mp3")
        if(soundON.current){
        music.current.play()
    }
        music.current.volume = 0.3
    }, [])
    
    return(
        <>
   <div style={{height: `${screenH.current}vh`,backgroundImage: `URL(${bg})`}} id='tela' className='relative w-screen  overflow-hidden m-auto sm:w-[300px] sm:rounded-[20px] sm:border-[10px] sm:border-black sm:h-[90vh] bg-[url("./assets/img/bg.png")] bg-cover flex justify-center sm:max-h-[600px]'
    >
    <Popup text='Você está sem pokebolas'/>
        <div className='w-full h-20 flex justify-end p-4'>
            <img id='run' src="./assets/img/running.png" draggable='false' alt="" 
            className='w-14 h-14 cursor-pointer hover:scale-125 z-10'
            onClick={()=>{
                setMsgPokeball(false)
                soundRunning.play()
                music.current.pause()
                return navigate('/world')
            }}
            />
        </div>

        <div id='catch' style={{position: 'absolute', display:'none'}} className='text-3xl font-extrabold text-gray-500 bottom-[400px] animate-fadeinscale scale-150'>GOTCHA!</div>

        <div id='pokesprite' className='absolute  bottom-[300px] w-60 text-center items-center justify-center flex flex-col sm:bottom-[300px]'> 
            <h1 className='bg-slate-600 text-white rounded-2xl px-2 py-1 min-w-fit'>{pokemons[numberPoke.current].name[0].toUpperCase() + pokemons[numberPoke.current].name.substring(1)}
            </h1>
            <img src={pokemonImg.current} draggable='false' alt="" style={{width:'160px',imageRendering: 'pixelated'}}/>
        </div>

        
        <div id='menu' className=' w-[95%] h-28 absolute bottom-10 m-auto drop-shadow-lg flex flex-col items-center justify-center text-center'>
            <img id='pokeballsprite'src="./assets/img/pokeball_catch.png" draggable='false' alt=""  
            className={`${effect && "animate-pokeball-throw"}
            absolute bottom-10 w-20 `}  
              
            onClick={() => {
                if(!capturing.current){
                capturing.current=true
                const runningbutton = document.getElementById('run')
                runningbutton.style.display= 'none'
                const pokeSprite = document.getElementById('pokesprite')
                const pokeballSprite = document.getElementById('pokeballsprite')
                const catchtext = document.getElementById('catch')
                if(pokeballs > 0){
                setEffect(true); 
                if(soundON.current){
                soundPokeball.play()}
                setPokeballs(pokeballs -1)
                      
                setTimeout(()=>{
                    if(soundON.current){
                        soundCatching.play()}
                pokeSprite.style='display:none'
                },1200)
                setEffect(true);  
                setTimeout(() => {   
                setEffect(false)
                pokeballSprite.style='bottom: 300px ;width: 40px;transform: rotate(-10deg)'
                
                 
                }, 1900);
                setTimeout(()=>{
                    if(soundON.current){
                    soundPokeballWobble.play()}
                    pokeballSprite.style='bottom: 300px ;width: 40px;transform: rotate(-30deg)'
                },2500)
                setTimeout(()=>{
                    pokeballSprite.style='bottom: 300px ;width: 40px;transform: rotate(30deg)'
                },3300)
                setTimeout(()=>{
                    pokeballSprite.style='bottom: 300px ;width: 40px;transform: rotate(-30deg)'
                },4100)
                setTimeout(()=>{
                    //pokeballSprite.style='bottom: 300px ;width: 40px;transform: rotate(30deg)'
                    catchtext.style.display='block'
                },4000)
                setTimeout(()=>{
                    
                    music.current.pause()
                    
                    music.current = new Audio("./assets/music/captured.mp3")
                    if(soundON.current){
                    music.current.volume = 0.08
                    music.current.play()}

                },4100)
                setTimeout(()=>{
                    music.current.pause()
                    capturing.current=false
                    
                    return navigate('/world')
                    

                },8800)

                let newCatch = {
                    globalID: pokemonmap[pokemonIndex].id,
                    name: pokemonmap[pokemonIndex].name,
                    number: numberPoke.current+1,
                    imgbag: pokemonImg.current,
                    cp: pokemonmap[pokemonIndex].cp,
                    weight: pokemonmap[pokemonIndex].weight,
                    height: pokemonmap[pokemonIndex].height,
                    type1: pokemonmap[pokemonIndex].type1,
                    type2: pokemonmap[pokemonIndex].type2 
                }
                 setPokemonBag(prevState => [...prevState,newCatch])
                 
                 
                     
                
                 
            }
            else{
                capturing.current=false
                soundError.play()
                setMsgPokeball(true)
                setTimeout(() => {
                    setMsgPokeball(false)
                }, 3000);
            } 
            }} 
        }
              
  
            />
            <h1 className='absolute bottom-1 text-white  text-2xl'>{pokeballs} x</h1>
        </div> 
    </div> 
    </>  
    )       
        
}

export default memo(Catch)