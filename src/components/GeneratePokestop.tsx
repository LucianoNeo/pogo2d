
import {memo } from 'react';
import Pokestop from './Pokestop';


const arr = Array.from({ length:50 }).map(() => true);

function GeneratePokestop(){

  
return(
  <>
{arr.map((_, index) => (        
  <> 
 <Pokestop index={index}/>
 
 </>
    ))
}
</>
)
}
    export default memo(GeneratePokestop)