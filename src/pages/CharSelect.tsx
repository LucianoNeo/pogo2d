
import { useState,useContext,useEffect } from 'react';
import UserContext from '../contexts/userContext';
import { useNavigate   } from 'react-router-dom'

import ConfirmButton from '../components/ConfirmButton';


let selected 




function CharSelect() {

const navigate = useNavigate()

const {setcharFace,setcharSprite,setCharName,charLevel,setLevel}= useContext(UserContext)


useEffect(() => {
    const red = document.getElementById('selectRED')
    const green = document.getElementById('selectGREEN')
    red.addEventListener('click',handleRED)
    green.addEventListener('click',handleGREEN)
}, [])


function handleRED(){
    const red = document.getElementById('selectRED')
    const green = document.getElementById('selectGREEN')
    setcharFace('./assets/img/redface.png')
    setcharSprite('./assets/img/sprites/red.png')
    setCharName("RED")
    setLevel(1)
    selected = 'red'
    if(selected == 'red'){
    red.style='filter: grayscale(0);transform: scale(1.3) translateX(50px); z-index:2 ',
    green.style='filter: grayscale(1)'
    }
}

function handleGREEN(){
    const red = document.getElementById('selectRED')
    const green = document.getElementById('selectGREEN')
    setcharFace('./assets/img/greenface.png')
            setcharSprite('./assets/img/sprites/green.png')
            setLevel(1)
            setCharName("GREEN")
            selected = 'green'
            if(selected == 'green'){
            green.style='filter: grayscale(0);transform: scale(1.3) translateX(-50px); z-index:2',
            red.style='filter: grayscale(1)'
    }
}

    return(
        <div id='tela' className='relative w-screen h-[100vh] overflow-hidden m-auto sm:w-[300px] sm:rounded-[20px] sm:border-[10px] sm:border-black sm:h-[98vh] flex '
        style={{background: 'linear-gradient(170deg, rgba(57,154,93,1) 20%, rgba(46,103,115,1) 83%)'}}
        >
        <div className='flex flex-col items-center justify-evenly w-full'
        style={{height:'100%'}}
        >
       <h1 className="text-xl text-white text-center ">Escolha seu personagem:</h1>
       <div className='flex w-full p-2 justify-between'>
        <img id='selectRED'src="./assets/img/red-selection.png" alt=""  className='bg-red-400 rounded w-[45%] cursor-pointer grayscale hover:grayscale-0 hover:scale-110'
        
        
        />
        <img id='selectGREEN'src="./assets/img/green-selection.png" alt=""  className='bg-green-400 rounded w-[45%] cursor-pointer grayscale hover:grayscale-0 hover:scale-110'
        />
       </div>
       <ConfirmButton onclick={()=>{navigate('/char-name-select')}}/>
       </div>
    </div>
    )
    
}

export default CharSelect