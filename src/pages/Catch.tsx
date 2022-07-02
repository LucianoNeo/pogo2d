import React, { useContext } from 'react'
import bg from '../assets/img/bg.png'
import UserContext from '../contexts/userContext';
import {useNavigate} from 'react-router-dom'


function Catch() {
    const navigate = useNavigate()
    const {pokeballs, setPokeballs}= useContext(UserContext)
    
    return(

   <div style={{backgroundImage: `URL(${bg})`}} id='tela' className='relative w-screen h-screen overflow-hidden m-auto sm:w-[300px] sm:rounded-[20px] sm:border-[10px] sm:border-black sm:h-[98vh] bg-[url("../assets/img/bg.png")] bg-cover flex justify-center ' >

        <div className='w-full h-20 flex justify-end p-4'>
            <img src="../src/assets/img/running.png" alt="" 
            className='cursor-pointer hover:scale-150'
            onClick={()=>{return navigate('/world')}}
            />
        </div>
        <div id='pokemon' className='absolute  top-72 w-24 text-center items-center justify-center flex flex-col lg:top-52'>
            <h1 className='bg-slate-600 text-white rounded-2xl px-2 py-1 min-w-fit'>Charmander</h1>
            <img src={`../src/assets/img/pokemon_catch/pokemon (4).gif`} alt="" />
        </div>


        <div id='menu' className=' w-[95%] h-28 absolute bottom-10 m-auto drop-shadow-lg flex flex-col items-center justify-center text-center'>
            <img src="../src/assets/img/pokeball_catch.png" alt=""  className='w-20 hover:scale-110'
            onClick={()=>{
                if(pokeballs > 0){
                setPokeballs(pokeballs-1)
            }
            }}
            />
            <h1 className='text-white text-2xl'>{pokeballs} x</h1>
        </div>
    </div>
    )
    
}

export default Catch