import Utils from '../utils';
import { memo, useState ,useContext} from 'react';
import stopblue from '../../public/assets/img/pokestopblue.png'
import stoppink from '../../public/assets/img/pokestoppink.png'
import {useNavigate} from 'react-router-dom'
import UserContext from '../contexts/userContext';


const utils = Utils()

const arr = Array.from({ length: 100 }).map(() => true);


function Pokestop(props){
    const {pokeballs, setPokeballs}= useContext(UserContext)
    const navigate = useNavigate()
    

return(
  <div style={{
    width:'36px', 
    height:'36px', 
    position: 'absolute', 
    left:`${utils.random(80,2900)}px`, 
    top:`${utils.random(100,4900)}px`,
    cursor:'pointer', }}
   id={`pokestop${props.index}`} key={props.index}
    onClick={()=>{ 
        let receivedBalls = utils.random(1,4)
        setPokeballs(pokeballs + receivedBalls)
        alert('Você ganhou '+receivedBalls+' pokebolas')
        
    }}
    >
        <img src={stopblue} alt="" />
 </div>
)
    
}
    
    export default memo(Pokestop)
