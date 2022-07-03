import React, { useContext,memo, useState } from 'react'
import bg from '../../public/assets/img/bg.png'
import UserContext from '../contexts/userContext';
import {useNavigate} from 'react-router-dom'





function Catch() {
    const navigate = useNavigate()
    const {pokeballs,pokemonImg,pokemons,numberPoke}= useContext(UserContext)
    const [pbUpdated,setpbUpd] = useState(pokeballs.current)
    
    
    return(
        <>
   <div style={{backgroundImage: `URL(${bg})`}} id='tela' className='relative w-screen h-[90vh] overflow-hidden m-auto sm:w-[300px] sm:rounded-[20px] sm:border-[10px] sm:border-black sm:h-[98vh] bg-[url("./assets/img/bg.png")] bg-cover flex justify-center ' >

        <div className='w-full h-20 flex justify-end p-4'>
            <img src="./assets/img/running.png" alt="" 
            className='cursor-pointer hover:scale-150'
            onClick={()=>{return navigate('/world')}}
            />
        </div>
        <div id='pokemon' className='absolute  top-40 w-60 text-center items-center justify-center flex flex-col lg:top-52'>
            <h1 className='bg-slate-600 text-white rounded-2xl px-2 py-1 min-w-fit'>{pokemons[numberPoke.current-1].name[0].toUpperCase() + pokemons[numberPoke.current-1].name.substring(1)}</h1>
            <img src={pokemonImg.current} alt="" style={{width:'160px',imageRendering: 'pixelated'}}/>
        </div>


        <div id='menu' className=' w-[95%] h-28 absolute bottom-10 m-auto drop-shadow-lg flex flex-col items-center justify-center text-center'>
            <img src="./assets/img/pokeball_catch.png" alt=""  className='w-20 hover:scale-110'
            onClick={()=>{
                if(pokeballs.current > 0){
                pokeballs.current -=1
                setpbUpd(pokeballs.current)
            }
            }}
            />
            <h1 className='text-white text-2xl'>{pbUpdated} x</h1>
        </div>
    </div>
    </>
    )
    
}

export default memo(Catch)