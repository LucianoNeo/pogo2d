import Utils from '../utils';
import { memo, useState ,useContext} from 'react';
import stopblue from '../assets/img/pokestopblue.png'
import stoppink from '../assets/img/pokestoppink.png'
import {useNavigate} from 'react-router-dom'
import UserContext from '../contexts/userContext';


const utils = Utils()

const arr = Array.from({ length: 100 }).map(() => true);


function Pokestop(){
    const {pokeballs, setPokeballs}= useContext(UserContext)
    const navigate = useNavigate()
    

return(

  <>
{arr.map((_, index) => (        
   <div style={{width:'36px', height:'36px', position: 'absolute', left:`${utils.random(80,2900)}px`, top:`${utils.random(100,4900)}px`,cursor:'pointer', }}
   id={`pokestop${index}`} key={index}
    onClick={()=>{ 
        let receivedBalls = utils.random(1,4)
        setPokeballs(pokeballs + receivedBalls)
        let atualPokestop = pokeballs
        setTimeout(() => {
            alert('Você ganhou ' + receivedBalls + ' pokebolas, agora você tem: ' + atualPokestop )
        }, 1000);
        
    }}
    >
        <img src={stopblue} alt="" />
 </div>
 
    ))
    
}
  </>
    )
    
    }
    
    export default memo(Pokestop)
