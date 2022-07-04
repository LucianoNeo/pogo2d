import Utils from '../utils';
import {useNavigate} from 'react-router-dom'
import { useState,useContext,memo, useEffect } from 'react';
import UserContext from '../contexts/userContext';

function Pokemon(props) {
    const navigate = useNavigate()
    const {numberPoke,pokemonImg,pokemonmap}= useContext(UserContext)    
    const utils = Utils()
    
    
    

return(
<div id={`pokemon${props.index}`} key={`pokemon${props.index}`}
   className= 'overflow-hidden'
   style={{
    cursor:'pointer',
    width:'64px', 
    height:'64px',
    position: 'absolute', 
    left:`${pokemonmap[props.index].left}`, 
    top:`${pokemonmap[props.index].top}`,
    
    }}
    onClick={()=>{
        numberPoke.current = pokemonmap[props.index].number
        let thisPoke = document.getElementById(`pokemon${props.index}`)
        thisPoke.style.display= 'none'
        pokemonmap.slice(1,[props.index])
        pokemonImg.current = `./assets/img/pokemon_catch/pokemon (${pokemonmap[props.index].number}).gif`
        pokemonmap[props.index].img=''
        return navigate('/catch')
    }}
    >
   <div
   className='absolute animate-walking' 
   style={{
    backgroundImage: `${pokemonmap[props.index].img}`,
    width:'256px', 
    height:'256px',
    imageRendering: 'pixelated'
   }}
   
   >

   </div>
 </div>
)

}

export default memo(Pokemon) 