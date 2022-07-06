import { useContext } from 'react'
import styled, {keyframes} from 'styled-components'
import UserContext from '../contexts/userContext'
import { SidesPersonagem } from '../types/SidesPersonagem'

type Props = {
    position: number;
}


export const Personagem =(props)=>
{
    const {walking,screenWidth,screenHeight,charSprite}= useContext(UserContext)
    
      return(
        <div style={{width:'64px',height:'64px',position:'relative',left:`${screenWidth.current*0.5-32}px`,top:`${screenHeight.current*0.5}px`,overflow:'hidden',zIndex:'12'}}>
        <div id='personagem' 
         className={`${walking && "animate-walking"}
        `}  
        style={{top:`${props.position}px`, 
        position: 'absolute', 
        width:'256px', 
        height:'256px',
        imageRendering:'pixelated' }}>
        <img src={charSprite} alt=""/>
        </div>
        </div>
    )   
}