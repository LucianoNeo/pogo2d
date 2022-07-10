
import { useState,useContext,useEffect } from 'react';
import UserContext from '../contexts/userContext';
import { useNavigate   } from 'react-router-dom'
import axios from 'axios'

function Loading() {

const navigate = useNavigate()

useEffect(() => {
    setTimeout(() => {
        return navigate('/char-select')
    }, 4000);
    
}, [])


    return(
        <div id='tela' className='relative w-screen h-[100vh] overflow-hidden bg-white m-auto sm:w-[300px] sm:rounded-[20px] sm:border-[10px] sm:border-black sm:h-[90vh] flex flex-col items-center justify-evenly sm:max-h-[600px]'>
        <div className='items-center flex flex-col justify-center'>
        <img src="./assets/img/NEO1.jpg" alt="" className='rounded-full w-20 h-20' />
       <h1 className="text-2xl text-center animate-fadein">Desenvolvido por LucianoNeo</h1>
       </div>
       <h1>v0.65</h1>
    </div>
    )
    
}

export default Loading