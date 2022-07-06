import React, { useContext,memo, useState,useEffect } from 'react'
import bg from '../../public/assets/img/bg.png'
import UserContext from '../contexts/userContext';
import {useNavigate} from 'react-router-dom'




  
 
   
function Catch() {
    const navigate = useNavigate()
    const {pokeballs,pokemonImg,pokemons,numberPoke,setPokeballs,screenWidth,screenHeight}= useContext(UserContext)
    const [effect, setEffect] = useState(false);

    return(
        <>
   <div style={{backgroundImage: `URL(${bg})`}} id='tela' className='relative w-screen h-[100vh] overflow-hidden m-auto sm:w-[300px] sm:rounded-[20px] sm:border-[10px] sm:border-black sm:h-[98vh] bg-[url("./assets/img/bg.png")] bg-cover flex justify-center ' >

        <div className='w-full h-20 flex justify-end p-4'>
            <img src="./assets/img/running.png" alt="" 
            className='cursor-pointer hover:scale-150'
            onClick={()=>{return navigate('/world')}}
            />
        </div>

        <div id='catch' style={{position: 'absolute', display:'none'}} className='text-3xl font-extrabold text-gray-500 bottom-[400px] animate-fadeinscale'>CATCH!</div>

        <div id='pokesprite' className='absolute  bottom-[300px] w-60 text-center items-center justify-center flex flex-col sm:bottom-[300px]'> 
            <h1 className='bg-slate-600 text-white rounded-2xl px-2 py-1 min-w-fit'>{pokemons[numberPoke.current-1].name[0].toUpperCase() + pokemons[numberPoke.current-1].name.substring(1)}
            </h1>
            <img src={pokemonImg.current} alt="" style={{width:'160px',imageRendering: 'pixelated'}}/>
        </div>

        
        <div id='menu' className=' w-[95%] h-28 absolute bottom-10 m-auto drop-shadow-lg flex flex-col items-center justify-center text-center'>
            <img id='pokeballsprite'src="./assets/img/pokeball_catch.png" alt=""  
            className={`${effect && "animate-pokeball-throw"}
            absolute bottom-10 w-20 `}  
              
            onClick={() => {
                const pokeSprite = document.getElementById('pokesprite')
                const pokeballSprite = document.getElementById('pokeballsprite')
                const catchtext = document.getElementById('catch')
                if(pokeballs > 0){
                setEffect(true); 
                setPokeballs(pokeballs -1)      
                setTimeout(()=>{
                pokeSprite.style='display:none'
                },1200)
                setEffect(true);  
                setTimeout(() => {   
                setEffect(false)
                pokeballSprite.style='bottom: 300px ;width: 40px;transform: rotate(-10deg)'
                
                 
                }, 1900);
                setTimeout(()=>{
                    pokeballSprite.style='bottom: 300px ;width: 40px;transform: rotate(-30deg)'
                },2500)
                setTimeout(()=>{
                    pokeballSprite.style='bottom: 300px ;width: 40px;transform: rotate(30deg)'
                },3000)
                setTimeout(()=>{
                    pokeballSprite.style='bottom: 300px ;width: 40px;transform: rotate(-30deg)'
                },3500)
                setTimeout(()=>{
                    pokeballSprite.style='bottom: 300px ;width: 40px;transform: rotate(30deg)'
                    catchtext.style.display='block'
                },4000)
                setTimeout(()=>{
                    return navigate('/world')
                },5800)
                 
            }
            else{
                alert("Você está sem pokebolas!")
            } 
            }} 
            
              
  
            />
            <h1 className='absolute bottom-1 text-white  text-2xl'>{pokeballs} x</h1>
        </div> 
    </div> 
    </>  
    )       
        
}

export default memo(Catch)