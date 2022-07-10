import { Personagem } from '../components/Personagem'
import { useEffect, useState,useContext,memo ,useRef} from 'react';
import {useNavigate} from 'react-router-dom'
import Mapa from '../components/Mapa';
import HookMapa from '../hooks/HookMapa';
import Menu from '../components/Menu';
import UserContext from '../contexts/userContext';
import dirbutton from '../../public/assets/img/up.png'
import { useMeasure } from 'react-use'
import SoundControll from '../components/SoundControll';
import {SpeakerSimpleSlash,SpeakerHigh} from 'phosphor-react'
import Popup from '../components/Popup';








function World() {

  

  
  

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

let intervalo = useRef()
  
function handleUp() {
  intervalo.current = setInterval(moveup, 30);
}

function handleDown() {
  intervalo.current = setInterval(movedown, 30);
} 

function handleLeft() {
  intervalo.current = setInterval(moveleft, 30);
} 

function handleRight() {
  intervalo.current = setInterval(moveright, 30);
} 
      
 
function handletouchup() {

   clearInterval(intervalo.current);
}

  const mapa = HookMapa()
  const navigate = useNavigate()
  const {posGlobal,walking,setWalking,pokeballs,screenWidth,screenHeight,soundON,setSound,setSoundIcon,soundIcon,started,pokestopmap,pokemonmap,pokemonBag,music}= useContext(UserContext)
  
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
    console.log('Pokemon capturados: ')
    console.log(pokemonBag)
    
    music.current = new Audio("./assets/music/worldtheme.mp3")
    if (soundON.current){
    music.current.play()
    }
    music.current.volume = 0.05
  
    const debug = document.getElementById('debug')
    history.pushState(null, null, location.href);
    window.onpopstate = function(event) {
      history.go(1);
    };

    window.addEventListener('keydown', handleKeyDown)
    window.addEventListener("contextmenu", function(e){
      e.preventDefault();
   }, false);
  }, [])
  
  

  const [side, setSide] = useState(0)
  
  const [screensize, { width,height}] = useMeasure<HTMLDivElement>();
  screenHeight.current = height
  screenWidth.current = width
 
if(pokestopmap == ''){
  navigate('/')
  return (<> </>)
}
   return (
    <>

    <div id='debug'className='hidden z-40 text-white p-4 absolute bg-slate-500 opacity-90 rounded-xl opacity-0 '>
    <h1>DEBUG:</h1>
    
    <h1>POSGLOBAL X: {posGlobal.x}</h1>
    <h1>POSGLOBAL Y: {posGlobal.y}</h1>
    <h1>POKEBOLAS: {pokeballs} </h1>
    <button className='bg-slate-900 rounded-xl w-40' onClick={()=>{return navigate('/catch')}}>Catch Test</button>
    </div>
    <div ref={screensize} id='tela' className='relative w-screen h-[100vh] overflow-hidden bg-blue-600 m-auto sm:w-[300px] sm:rounded-[20px] sm:border-[10px] sm:border-black sm:h-[90vh] sm:max-h-[600px]' >
    <Popup text='Espere 1 minuto para poder girar novamente!'/>
    <Menu/>
    
    <Mapa x={posGlobal.x} y={posGlobal.y}/>
    <Personagem position={side}/>
    <button className='text-white z-30 absolute top-5 cursor-pointer p-2 hover:text-red-700'
    onClick={()=>{
      
      if(soundON.current){
      setSoundIcon(<SpeakerHigh size={32} />)
      music.current.pause()
      soundON.current= false
    
    }else{
      setSoundIcon(<SpeakerSimpleSlash size={32} />)
      music.current.play()
      soundON.current= true
  
    }
      }}>
      {soundIcon}
    </button>

    <div style={{ width: '128px', position: 'absolute', left:'210px', top:'150px',opacity:'0'}}>
	  <img src="./assets/img/joystick-base.png"/>
	  <div id="stick1" style={{position: 'absolute', left:'32px', top:'32px',}}>
	  <img src="./assets/img/joystick-blue.png"/>		
	  </div>
    </div>
    <div id='joystick' className="absolute w-24 h-20, right-8 bottom-52 z-30 flex  flex-col justify-center items-center opacity-50 sm:hidden scale-150">
            <img id='upbutton'src={dirbutton} alt=""
            onTouchStart={handleUp}
            onTouchEnd={handletouchup}
            style={{width:'30px',height:'30px',cursor:'pointer'}}/>

            <div className='flex flex-row w-full justify-between '>
            <img src={dirbutton} alt="" 
            onTouchStart={handleLeft}
            onTouchEnd={handletouchup}
            style={{width:'30px',height:'30px',transform:'rotate(-90deg)',cursor:'pointer'}}/>
            
            <img src={dirbutton} alt="" 
            onTouchStart={handleRight}
            onTouchEnd={handletouchup}
            style={{width:'30px',height:'30px',transform:'rotate(90deg)',cursor:'pointer'}}/>
            
            </div>
            <img src={dirbutton} alt="" 
            onTouchStart={handleDown}
            onTouchEnd={handletouchup}
            style={{width:'30px',height:'30px',transform:'rotate(180deg)',cursor:'pointer'}}/>

        </div>
    </div>
    </>
  )
}

export default memo(World)
