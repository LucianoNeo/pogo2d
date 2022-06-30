import { useState } from 'react'
import { SidesPersonagem } from '../types/SidesPersonagem'

const HookPersonagem = () => {

 const [side, setSide] = useState<SidesPersonagem>('down')

 const moveLeft = () =>{
      setSide('left')
 }
 const moveRight = () =>{
    setSide('right')
      }

 const moveDown = () =>{
    setSide('down')
  }
 const moveUp = () =>{
    setSide('up')
 } 
 
 
return{ 
    moveDown,
    moveLeft,
    moveRight,
    moveUp,
    side: side,
}

}


export default HookPersonagem