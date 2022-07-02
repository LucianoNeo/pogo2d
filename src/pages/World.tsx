import { Personagem } from '../components/Personagem'
import { useEffect, useState } from 'react';
import Mapa from '../components/Mapa';
import HookMapa from '../hooks/HookMapa';
import Menu from '../components/Menu';



function World() {

  const mapa = HookMapa()

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


  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown)
    return () => {
      window.removeEventListener('keydown', handleKeyDown)}
  }, [])
  
  const [side, setSide] = useState(0)


   return (
    <div id='tela' className='relative w-screen h-screen overflow-hidden bg-blue-600 m-auto sm:w-[300px] sm:rounded-[20px] sm:border-[10px] sm:border-black sm:h-[98vh]' >
     <Menu/>
      <Mapa x={mapa.x} y={mapa.y}/>
    <Personagem position={side}/>
    <h1>pos</h1>
    </div>
    
  )
}

export default World