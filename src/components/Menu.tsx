import redface from '../../public/assets/img/redface.png'
import pokeball from '../../public/assets/img/pokeball.png'
import { useContext, useRef, useState } from 'react'
import UserContext from '../contexts/userContext'
import ConfirmButton from './ConfirmButton'
import PokemonBagButton from './PokemonBagButton'
import PokemonItemsButton from './PokemonItemsButton'
import {useNavigate} from 'react-router-dom'

function Menu() {
    const navigate = useNavigate()

    function openPokemonBag() {
        return navigate('/pkbag')
    }



    const {receivedBalls,screenHeight,screenWidth,charFace,charName,charLevel}= useContext(UserContext)
    const [pokeballMenuOpen,setpokeballMenuOpen] = useState(false)
    const soundSelect = new Audio("./assets/sfx/select.mp3")
return(
<div className='w-full h-16 absolute bottom-16 z-30 px-2 justify-between flex items-center '>

    <div id='facePersonagem'className='w-20 border-4 border-yellow-100 rounded-full h-20 overflow-hidden bg-gray-500'>
        <a href="#"><img src={charFace} alt=""/></a>
        
    </div>

    <div id='progressBar'className="absolute w-28 bg-gray-200 rounded-full h-3 dark:bg-gray-700 bottom-[-18px] border-[1px] border-gray-500">
        <div className="bg-blue-600 h-[10.1px] rounded-full w-[10%]"></div>
    </div>

    <div id='nomePersonagem' className='absolute bottom-[-40px] left-2'>
        <h1 className='text-white text-md drop-shadow-md'>{charName}</h1>
    </div>

    <div id='level'className='absolute bottom-[-9px] left-1'>
        <h1 className='text-white text-4xl font-extrabold '>{charLevel}</h1>
    </div>
    
    <div id='pokeball-menu' className={`w-full h-16 bottom-16 absolute items-center justify-center px-32 sm:px-20 animate-fadeinmenu scale-150 hidden`}>    
        <PokemonBagButton onclick={openPokemonBag}/>
        <PokemonItemsButton/>
        
    </div>

    <div id='pokeball'className='w-16 ml-8'> 
        <img src={pokeball} alt=""  className='cursor-pointer '
        onClick={()=>{
            soundSelect.play()
            if(!pokeballMenuOpen){
                setpokeballMenuOpen(true)
               
            document.getElementById('pokeball-menu').style.display='flex'
            }else{
                soundSelect.play()
                setpokeballMenuOpen(false)
                document.getElementById('pokeball-menu').style.display='none'    
                
            }
            
        }}
        />
        
    </div>
    <div id='itemsShow' className={`absolute animate-fadein-out w-full right-2 hidden`}
    style={{top:`-${screenHeight.current/1.8}px`}}> 
    <img id='pokeballsprite'src="./assets/img/pokeball_catch.png" alt=""  
            className='absolute bottom-16 w-7 right-10'/>
            <h1 className='text-white text-2xl font-extrabold drop-shadow-2xl shadow-black absolute bottom-16 w-6 right-2'>+{receivedBalls.current}</h1>
    </div>
    
<div id='sightings'className='w-24 bg-white h-8 rounded-2xl translate-x-5 opacity-70'>
    
</div>
</div>
)

}


export default Menu