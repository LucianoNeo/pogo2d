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
`

type Props = {
    position: number;
}




export const Personagem =(props)=>
{
    return(
        <WrapperPersonagem>
        <div id='personagem' className={`top-[${props.position}px] absolute w-64 h-64 animate-walking `}>
        <img src={red} alt=""/>
        </div>
        </WrapperPersonagem>
    )   
}