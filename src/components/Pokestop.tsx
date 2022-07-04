import Utils from '../utils';
import { memo, useState ,useContext} from 'react';
import {useNavigate} from 'react-router-dom'
import UserContext from '../contexts/userContext';


const utils = Utils()


function Pokestop(props){
    const {pokeballs,pokestopmap,setPokeballs,setPksMap}= useContext(UserContext)
    const navigate = useNavigate()
    let spinned = false

return(
  <div style={{
    width:'36px', 
    height:'36px', 
    position: 'absolute', 
    left:`${pokestopmap[props.index].left}`, 
    top:`${pokestopmap[props.index].top}`, 
    cursor:'pointer',
    backgroundImage:`${pokestopmap[props.index].img}`,
    backgroundSize:'cover'

}}
   id={`pokestop${props.index}`} key={props.index}
    onClick={()=>{ 
        if (!pokestopmap[props.index].spinned ){
        const thispokestop = document.getElementById(`pokestop${props.index}`)
        pokestopmap[props.index].img= 'url(./assets/img/pokestoppink.png)'
        let receivedBalls = utils.random(1,4)
        setPokeballs(pokeballs + receivedBalls)
        alert('Você ganhou '+receivedBalls+' pokebolas')
        pokestopmap[props.index].spinned= true
        
        setTimeout(() => {
            pokestopmap[props.index].img= 'url(./assets/img/pokestopblue.png)'
            thispokestop.style.backgroundImage = 'url(./assets/img/pokestopblue.png)'
            pokestopmap[props.index].spinned= false
         
        }, 60000);
    }
    else{alert('Você poderá girar a pokestop novamente em 1 minuto')}
        
    }}
    >
        
 </div>
)
    
}
    
    export default memo(Pokestop)
