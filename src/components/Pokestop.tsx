import Utils from '../utils';
import { memo, useState ,useContext} from 'react';
import {useNavigate} from 'react-router-dom'
import UserContext from '../contexts/userContext';


const utils = Utils()

const arr = Array.from({ length: 100 }).map(() => true);


function Pokestop(props){
    const {pokeballs}= useContext(UserContext)
    const navigate = useNavigate()
    let spinned = false

return(
  <div style={{
    width:'36px', 
    height:'36px', 
    position: 'absolute', 
    left:`${utils.random(80,2900)}px`, 
    top:`${utils.random(100,4900)}px`,
    cursor:'pointer',
    backgroundImage:'url(./assets/img/pokestopblue.png)',
    backgroundSize:'cover'

}}
   id={`pokestop${props.index}`} key={props.index}
    onClick={()=>{ 
        if (!spinned ){
        const thispokestop = document.getElementById(`pokestop${props.index}`)
        thispokestop.style.backgroundImage = 'url(./assets/img/pokestoppink.png)'
        let receivedBalls = utils.random(1,4)
        pokeballs.current += receivedBalls
        alert('Você ganhou '+receivedBalls+' pokebolas')
        spinned= true
        setTimeout(() => {
            thispokestop.style.backgroundImage = 'url(./assets/img/pokestopblue.png)'
            spinned= false
        }, 60000);
    }
    else{alert('Você poderá girar a pokestop novamente em 1 minuto')}
        
    }}
    >
        
 </div>
)
    
}
    
    export default memo(Pokestop)
