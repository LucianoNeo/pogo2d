import { Personagem } from '../components/Personagem'
import { useEffect, useState,useContext,memo } from 'react';
import {useNavigate} from 'react-router-dom'
import Mapa from '../components/Mapa';
import HookMapa from '../hooks/HookMapa';
import Menu from '../components/Menu';
import UserContext from '../contexts/userContext';
import dirbutton from '../../public/assets/img/up.png'
import { useMeasure } from 'react-use'









function World() {


let movecima = false
var loop

function lerolero() {
  if(movecima){
   loop = setInterval(()=>{
    console.log('moveu')
    mapa.moveUp()
  },500)
  }
  
}

  

function moveup(){
  setSide(-196)  
  mapa.moveUp()
 
}

function movedown(){
  setSide(0)  
  mapa.moveDown()
}

function moveleft(){

  mapa.moveLeft()
  setSide(-64)
}

function moveright(){

  mapa.moveRight()
  setSide(-128)
}



  const mapa = HookMapa()
  const navigate = useNavigate()
  const {posGlobal,walking,setWalking,pokeballs,screenWidth,screenHeight}= useContext(UserContext)
  
  let debugOn = false
  const handleKeyDown = (e: KeyboardEvent) =>{
    switch (e.code) {
      case 'ArrowLeft':
      case 'KeyA':
        case 'KeyE':
        moveleft()
        
        break;
        case 'ArrowRight':
        case 'KeyD':
        moveright()
      
        break;
        case 'ArrowUp':
        case 'KeyW':
        moveup()
       
        break;
        case 'ArrowDown':
        case 'KeyS':
        movedown()
      
        break;
        case 'ArrowDown':
        case 'KeyP':
        !debugOn ? (debug.style.opacity = '100', debugOn=true) : (debug.style.opacity = '0',debugOn=false)
        break;
    
    }

   
  }
 
  
  posGlobal.x=mapa.x
  posGlobal.y=mapa.y
  
  useEffect(() => {
    
    const debug = document.getElementById('debug')
    
   
  
    
    history.pushState(null, null, location.href);
    window.onpopstate = function(event) {
      history.go(1);
    };

    const botao = document.getElementById('upbutton')



    window.addEventListener('keydown', handleKeyDown)
    window.addEventListener("contextmenu", function(e){
      e.preventDefault();
   }, false);

    
  }, [])
  
  const [side, setSide] = useState(0)
  
  const [screensize, { width,height}] = useMeasure<HTMLDivElement>();
  screenHeight.current = height
  screenWidth.current = width
 

   return (
    <>

    <div id='debug'className='z-40 text-white p-4 absolute bg-slate-500 opacity-90 rounded-xl opacity-0 '>
    <h1>DEBUG:</h1>
    
    <h1>POSGLOBAL X: {posGlobal.x}</h1>
    <h1>POSGLOBAL Y: {posGlobal.y}</h1>
    <h1>POKEBOLAS: {pokeballs} </h1>
    <button className='bg-slate-900 rounded-xl w-40' onClick={()=>{return navigate('/catch')}}>Catch Test</button>
    </div>
    <div ref={screensize} id='tela' className='relative w-screen h-[100vh] overflow-hidden bg-blue-600 m-auto sm:w-[300px] sm:rounded-[20px] sm:border-[10px] sm:border-black sm:h-[98vh]' >
    
    <Menu/>
    
    <Mapa x={posGlobal.x} y={posGlobal.y}/>
    <Personagem position={side}/>

    <div style={{ width: '128px', position: 'absolute', left:'210px', top:'150px',opacity:'0'}}>
	  <img src="./assets/img/joystick-base.png"/>
	  <div id="stick1" style={{position: 'absolute', left:'32px', top:'32px',}}>
	  <img src="./assets/img/joystick-blue.png"/>		
	  </div>
    </div>
    <div id='joystick' className="absolute w-24 h-20, right-8 bottom-44 z-30 flex  flex-col justify-center items-center opacity-50 sm:hidden scale-150">
            <img id='upbutton'src={dirbutton} alt=""
            onMouseDown={moveup}
            style={{width:'30px',height:'30px',cursor:'pointer'}}/>

            <div className='flex flex-row w-full justify-between '>
            <img src={dirbutton} alt="" 
            onMouseDown={moveleft}
            style={{width:'30px',height:'30px',transform:'rotate(-90deg)',cursor:'pointer'}}/>
            
            <img src={dirbutton} alt="" 
            onMouseDown={moveright}
            style={{width:'30px',height:'30px',transform:'rotate(90deg)',cursor:'pointer'}}/>
            
            </div>
            <img src={dirbutton} alt="" 
            onMouseDown={movedown}
            style={{width:'30px',height:'30px',transform:'rotate(180deg)',cursor:'pointer'}}/>

        </div>
    </div>
    </>
  )
}

export default memo(World)
