import styled, {keyframes} from 'styled-components'
import red from '../assets/img/red.png'
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
    return(
        <WrapperPersonagem>
        <div id='personagem' 
        className='animate-walking'
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