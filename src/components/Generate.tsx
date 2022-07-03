
import {useNavigate} from 'react-router-dom'
import {memo } from 'react';
import Pokemon from './Pokemon';
import Pokestop from './Pokestop';


const arr = Array.from({ length: 200 }).map(() => true);

function Generate(){
  const navigate = useNavigate()
  
return(
  <>
{arr.map((_, index) => (        
  <> 
 <Pokemon index={index}/>
 <Pokestop index={index}/>
 </>
    ))
}
</>
)
}
    export default memo(Generate)