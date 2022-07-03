import { useState,useContext,memo } from 'react';
import styled from 'styled-components'
import UserContext from '../contexts/userContext';
import LayerPokemon from './LayerPokemon';
import LayerPokestop from './LayerPokestop';
import Pokemon from './Generate';
import Quadras from './Quadras';

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
            <Pokemon/>
        </div>
        
    )
    
}

export default memo(Mapa)