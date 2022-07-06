import Utils from '../utils';
import {useNavigate} from 'react-router-dom'
import { useState,useContext,memo, useEffect } from 'react';
import UserContext from '../contexts/userContext';

function Pokemon(props) {
    const navigate = useNavigate()
    const {numberPoke,pokemonImg,pokemonmap,pokeballs,setPkmMap}= useContext(UserContext)    
    const utils = Utils()
    
    
if(!pokemonmap[props.index].activespawn)    
return <></>

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
        if(pokeballs >0){
     
        setPkmMap(
            (oldState) => {
                const newState = [...oldState]
                newState[props.index] = {...oldState[props.index], activespawn: false}
                return newState
              }
        )
        pokemonmap[props.index].activespawn=false

    }      
        pokemonImg.current = `./assets/img/pokemon_catch/pokemon (${pokemonmap[props.index].number}).gif`
     
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