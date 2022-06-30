import styled from 'styled-components'
import { Personagem } from './components/Personagem'
import { useEffect, useState } from 'react';
import Mapa from './components/Mapa';
import HookMapa from './hooks/HookMapa';
import Menu from './components/Menu';
import Pokemon from './components/Pokemon';





const Tela = styled.div`
position: relative;
width:300px;
height: 95vh;
overflow: hidden;
margin: 0 auto;
margin-top: 20px;
background-color: #208edb;
border: 10px solid black;
border-radius: 20px;
`



function App() {

  const mapa = HookMapa()

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown)
    return () => {
      window.removeEventListener('keydown', handleKeyDown)}
  }, [])
  
  const [side, setSide] = useState(0)

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


   return (
    
    <Tela>
     <Menu/>
      <Mapa x={mapa.x} y={mapa.y}/>
    <Personagem position={side}/>
    </Tela>

  )
}

export default App
