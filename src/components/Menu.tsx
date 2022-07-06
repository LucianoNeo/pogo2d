import redface from '../../public/assets/img/redface.png'
import pokeball from '../../public/assets/img/pokeball.png'
import { useContext } from 'react'
import UserContext from '../contexts/userContext'




function Menu() {
    const {receivedBalls,screenHeight,charFace,charName}= useContext(UserContext)

return(
<div className='w-full h-16 absolute bottom-10 z-30 px-2 justify-between flex items-center'>

    <div id='facePersonagem'className='w-16 border-4 border-yellow-100 rounded-full h-16 overflow-hidden bg-gray-500'>
        <a href="#"><img src={charFace} alt=""/></a>
        
    </div>

    <div id='progressBar'className="absolute w-28 bg-gray-200 rounded-full h-3 dark:bg-gray-700 bottom-[-18px] border-[1px] border-gray-500">
        <div className="bg-blue-600 h-[10.1px] rounded-full w-[2%]"></div>
    </div>

    <div id='nomePersonagem' className='absolute bottom-[-40px] left-2'>
        <h1 className='text-white text-md drop-shadow-md'>{charName}</h1>
    </div>

    <div id='level'className='absolute bottom-[-9px] left-1'>
        <h1 className='text-white text-4xl font-extrabold '>1</h1>
    </div>
    
    <div id='pokeball'className='w-12 ml-8'> 
        <img src={pokeball} alt=""  className='cursor-pointer '/>
        
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