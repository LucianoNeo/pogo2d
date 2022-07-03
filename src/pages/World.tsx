import { Personagem } from '../components/Personagem'
import { useEffect, useState,useContext,memo } from 'react';
import Mapa from '../components/Mapa';
import HookMapa from '../hooks/HookMapa';
import Menu from '../components/Menu';
import UserContext from '../contexts/userContext';
import Joystick from '../components/joystick';
import buttonUp from '../assets/img/up.png'

function World() {

  const mapa = HookMapa()
  const {posGlobal,pos,setPosGlobal,pokemons}= useContext(UserContext)

  const handleKeyDown = (e: KeyboardEvent) =>{
    switch (e.code) {
      case 'ArrowLeft':
      case 'KeyA':
        mapa.moveLeft()
        setSide(-64)
        break;
        case 'ArrowRight':
        case 'KeyD':
        mapa.moveRight()
        setSide(-128)
        break;
        case 'ArrowUp':
        case 'KeyW':
        setSide(-196)  
        mapa.moveUp()
        break;
        case 'ArrowDown':
        case 'KeyS':
        mapa.moveDown()
        setSide(0)
        break;
    
    }
    
  }

  posGlobal.x=mapa.x
  posGlobal.y=mapa.y

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown)
    return () => {
      window.removeEventListener('keydown', handleKeyDown)}
  }, [])
  
  const [side, setSide] = useState(0)
 
   return (
    <>
    <div className='z-40 text-white p-4 absolute bg-slate-500 opacity-90 rounded-xl'>
    <h1>POS X: {mapa.x} </h1>
    <h1>POS Y: {mapa.y} </h1>
    <h1>POSGLOBAL X: {posGlobal.x}</h1>
    <h1>POSGLOBAL Y: {posGlobal.y}</h1>
    </div>
    <div id='tela' className='relative w-screen h-screen overflow-hidden bg-blue-600 m-auto sm:w-[300px] sm:rounded-[20px] sm:border-[10px] sm:border-black sm:h-[98vh]' >
    
     <Menu/>
     
      <Mapa x={posGlobal.x} y={posGlobal.y}/>
    <Personagem position={side}/>

    <div className="absolute w-20 h-20 right-8 bottom-28 z-30 flex  flex-col justify-center items-center opacity-50 sm:hidden">
            <img src={buttonUp} alt=""
            onClick={()=>{
              mapa.moveUp()
              setSide(-196)
            }}
            style={{width:'30px',height:'30px',cursor:'pointer'}}/>
            <div className='flex flex-row w-full justify-between '>
            <img src={buttonUp} alt="" 
            onClick={()=>{
              mapa.moveLeft()
              setSide(-64)
            }}
            style={{width:'30px',height:'30px',transform:'rotate(-90deg)',cursor:'pointer'}}/>
            <img src={buttonUp} alt="" 
            onClick={()=>{
              mapa.moveRight()
              setSide(-128)
            }}
            style={{width:'30px',height:'30px',transform:'rotate(90deg)',cursor:'pointer'}}/>
            </div>
            <img src={buttonUp} alt="" 
            onClick={()=>{
              mapa.moveDown()
              setSide(0)
            }}
            style={{width:'30px',height:'30px',transform:'rotate(180deg)',cursor:'pointer'}}/>

        </div>
    </div>
    </>
  )
}

export default memo(World)