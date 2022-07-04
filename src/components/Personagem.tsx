import { useContext } from 'react'
import styled, {keyframes} from 'styled-components'
import red from '../../public/assets/img/red.png'
import UserContext from '../contexts/userContext'
import { SidesPersonagem } from '../types/SidesPersonagem'


const WrapperPersonagem = styled.div`
width:64px;
height:64px;
position: relative;
left: 40%;
top: 45%;
overflow: hidden;
z-index: 12;
`

type Props = {
    position: number;
}


export const Personagem =(props)=>
{

    const {walking}= useContext(UserContext)


    return(
        <WrapperPersonagem>
        <div id='personagem' 
         className={`${walking && "animate-walking"}
        `}  
        style={{top:`${props.position}px`, 
        position: 'absolute', 
        width:'256px', 
        height:'256px',
        imageRendering:'pixelated' }}>
        <img src={red} alt=""/>
        </div>
        </WrapperPersonagem>
    )   
}