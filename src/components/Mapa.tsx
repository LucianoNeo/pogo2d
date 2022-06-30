import { useState } from 'react';
import styled from 'styled-components'
import Quadras from './Quadras';

const Wrapper = styled.div<{left: number, top:number}>`
display: flex;
flex-wrap: wrap;
width: 3000px;
height: 3000px;
position: absolute;
left: ${props => props.left}px;
top: ${props => props.top}px;
`

type Props ={
    x: number;
    y: number
}


function Mapa({x,y}: Props) {

    
    return(
        <Wrapper id='container' left={x} top={y}>
            <Quadras/>
        </Wrapper>
        
    )
    
}

export default Mapa