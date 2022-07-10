import Utils from '../utils';
import { memo, useState ,useContext} from 'react';
import {useNavigate} from 'react-router-dom'
import UserContext from '../contexts/userContext';


const utils = Utils()
const soundError = new Audio("./assets/sfx/error.mp3")
const soundPokestop = new Audio("./assets/sfx/pokestop.mp3")
function Pokestop(props){
    const {pokeballs,pokestopmap,setPokeballs,setPksMap,receivedBalls,setMsgPokeball,soundON}= useContext(UserContext)
    const navigate = useNavigate()
    

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
    const itemsShow = document.getElementById('itemsShow')

        if (!pokestopmap[props.index].spinned ){
           
        const thispokestop = document.getElementById(`pokestop${props.index}`)
        
        setPksMap(
            (oldState) => {
                const newState = [...oldState]
                newState[props.index] = {...oldState[props.index], img: 'url(./assets/img/pokestoppink.png)'}
                return newState
              }
        )
        setPksMap(
            (oldState) => {
                const newState = [...oldState]
                newState[props.index] = {...oldState[props.index], spinned: true}
                return newState
              }
        )
        if(soundON.current){
            soundPokestop.play()} 
        receivedBalls.current=utils.random(1,4)
        setPokeballs(pokeballs + receivedBalls.current)
        //pokestopmap[props.index].spinned= true
        itemsShow.style.display = 'block'
        setTimeout(() => {
            
            itemsShow.style.display = 'none'
        }, 4000);
        setTimeout(() => {
            setPksMap(
                (oldState) => {
                    const newState = [...oldState]
                    newState[props.index] = {...oldState[props.index], img: 'url(./assets/img/pokestopblue.png)'}
                    return newState
                  }
            )
          
           setPksMap(
            (oldState) => {
                const newState = [...oldState]
                newState[props.index] = {...oldState[props.index], spinned: false}
                return newState
              }
        )
         
        }, 60000);
    }
    else{
        soundError.play()
        setMsgPokeball(true)
    setTimeout(() => {
        setMsgPokeball(false)
    }, 4000);
    }
        
    }}
    >
        
 </div>
)
    
}
    
    export default memo(Pokestop)
