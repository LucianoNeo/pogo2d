
import { useState,useContext,useEffect } from 'react';
import UserContext from '../contexts/userContext';
import { useNavigate   } from 'react-router-dom'
import ConfirmButton from '../components/ConfirmButton';
import React from 'react';


function CharNameSelect() {

const navigate = useNavigate()

const {setcharFace,setcharSprite,setCharName,charName,screenH}= useContext(UserContext)

    return(
        <div id='tela' className='relative w-screen h-[100vh] overflow-hidden m-auto sm:w-[300px] sm:rounded-[20px] sm:border-[10px] sm:border-black sm:h-[90vh] sm:max-h-[600px] flex '
        style={{height: `${screenH.current}vh`,background: 'linear-gradient(170deg, rgba(57,154,93,1) 20%, rgba(46,103,115,1) 83%)'}}

        
        >
        <div className='flex flex-col items-center w-screen h-[60%] justify-evenly'>
        <h1 className="text-xl text-white text-center ">Escolha seu nome:</h1>
            <input 
            autoFocus
            id='name'
            onChange={(e) => {
                setCharName(e.target.value)
                localStorage.setItem('username',e.target.value)
            }
            }
            className='rounded text-lg p-2 text-gray-500 text-center'
            type="text" name="" autoComplete='off'/>
            <div className='absolute bottom-20'>
            <ConfirmButton onclick={()=>{navigate('/loading')}}/>
           
            </div>
            
        </div>
       
       </div>
  
    )
    
}

export default CharNameSelect