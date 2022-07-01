import { useState } from 'react';
import styled from 'styled-components'
import LayerPokemon from './LayerPokemon';
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
        <div id='container' 
        style={{
            left:`${x}px`, 
            top:`${y}px`,
            display: 'flex',
            flexWrap: 'wrap',
            width: '3000px',
            height: '3000px',
            position: 'absolute',            
            
            }}>
                 <Quadras/>
            <LayerPokemon/>
           
        </div>
        
    )
    
}

export default Mapa