import { memo } from 'react';
import GeneratePokemon from './GeneratePokemon';
import GeneratePokestop from './GeneratePokestop';
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
            <GeneratePokemon/>
            <GeneratePokestop/>
            
        </div>
        
    )
    
}

export default memo(Mapa)