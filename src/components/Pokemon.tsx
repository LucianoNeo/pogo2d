import Utils from '../utils';
import {useNavigate} from 'react-router-dom'
import { useState,useContext,memo, useEffect } from 'react';
import UserContext from '../contexts/userContext';

function Pokemon(props) {
    const navigate = useNavigate()
    const {posGlobal,setPokemonImg,setNumberPoke,pokeballs,setPokeballs}= useContext(UserContext)    
    const utils = Utils()
    let numberPoke = utils.random(10,99)
    
    const [positionX,setPosX] =  useState(utils.random(80,2900))
    const [positionY,setPosY] = useState(utils.random(100,4900))

return(
<div id={`pokemon${props.index}`} key={`pokemon${props.index}`}
   className= 'overflow-hidden'
   style={{
    cursor:'pointer',
    width:'64px', 
    height:'64px',
    position: 'absolute', 
    left:`${positionX}px`, 
    top:`${positionY}px`,
    
    }}
    onClick={()=>{
        setNumberPoke(numberPoke)
        let thisPoke = document.getElementById(`pokemon${props.index}`)
        thisPoke.style.display= 'none'
        setPokemonImg(`./assets/img/pokemon_catch/pokemon (${numberPoke}).gif`)
        return navigate('/catch')
    }}
    >
   <div
   className='absolute animate-walking' 
   style={{
    backgroundImage: `url(./assets/img/sprites/0${numberPoke}.png)`,
    width:'256px', 
    height:'256px',
   }}
   
   >

   </div>
 </div>
)

}

export default memo(Pokemon) 