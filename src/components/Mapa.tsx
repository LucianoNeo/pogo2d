import { memo } from 'react';
import Generate from './Generate';

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
            <Generate/>
            
        </div>
        
    )
    
}

export default memo(Mapa)