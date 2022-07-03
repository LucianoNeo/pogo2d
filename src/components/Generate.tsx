import Utils from '../utils';
import {useNavigate} from 'react-router-dom'
import { useState,useContext,memo } from 'react';
import UserContext from '../contexts/userContext';
import stopblue from '../assets/img/pokestopblue.png'
import stoppink from '../assets/img/pokestoppink.png'


const utils = Utils()

const arr = Array.from({ length: 200 }).map(() => true);





function Generate(){
  const navigate = useNavigate()
  const {posGlobal,setPokemonImg,setNumberPoke,numberPoke,pokeballs,setPokeballs}= useContext(UserContext)
  
return(

  <>
{arr.map((_, index) => (        
   <div id={`${index}`} key={index}
   style={{width:'36px', position: 'absolute', left:`${utils.random(80,2900)}px`, top:`${utils.random(100,4900)}px`}}>
   <a href="#" onClick={()=>{
    let thisPoke = document.getElementById(`img${index}`)

    thisPoke.style.display= 'none'
    setNumberPoke(thisPoke.getAttribute('src')?.replace('../src/assets/img/pokemon/','').replace('.png',''))
    let imgNumber = thisPoke.getAttribute('src')?.replace('../src/assets/img/pokemon/','').replace('.png','')
      setPokemonImg(`../assets/img/pokemon_catch/pokemon (${imgNumber}).gif`)

      return navigate('/catch')
  
    }}> <img id={`img${index}`} src={`../assets/img/pokemon/${utils.random(4,140)}.png`} alt="" className="w-[36px] h-[36px] "/>
   </a>
 </div>
 
    ))
    
}
{arr.map((_, index) => (        
   <div style={{width:'36px', height:'36px', position: 'absolute', left:`${utils.random(80,2900)}px`, top:`${utils.random(100,4900)}px`,cursor:'pointer', }}
   id={`pokestop${index}`} key={index}
    onClick={()=>{ 
         let receivedBalls = utils.random(1,4)
         setPokeballs(pokeballs + receivedBalls)
        alert('Você ganhou  pokebolas')
    }}
    >
        <img src={stopblue} alt="" />
 </div>
 
    ))
    
}
  </>
    )
    
    }
    
    export default memo(Generate)
