import React, { memo, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import UserContext from '../contexts/userContext';

function Pokemon(props) {
    const navigate = useNavigate()
    const {numberPoke,pokemonImg,pokemonmap,pokeballs,setPkmMap,setPokemonIndex}= useContext(UserContext)       
    
    

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
        setPokemonIndex( props.index)
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
        pokemonImg.current = `./assets/img/pokemon_catch/pokemon (${pokemonmap[props.index].number+1}).gif`
     
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