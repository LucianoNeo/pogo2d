import { useState } from 'react'


const HookMapa = () => {

 const [pos, setPos] = useState({x: 130,y:250})

 const moveLeft = () =>{
      setPos(pos => ({

        x: canMove(pos.x +5,pos.y) ? pos.x +5 : pos.x,
        y: pos.y
     }))
 }
 const moveRight = () =>{
   
     setPos(pos => ({
        x: canMove(pos.x -5,pos.y) ? pos.x -5 : pos.x,
         y: pos.y
     }))
 }

 const moveDown = () =>{
     setPos(pos => ({
         x: pos.x , 
         y: canMove(pos.x,pos.y -5) ? pos.y -5 : pos.y,
     }))
   
  }
 const moveUp = () =>{
      setPos(pos => ({
       x: pos.x , 
       y: canMove(pos.x,pos.y +5) ? pos.y +5 : pos.y,
   }))

 } 
 
 
 const canMove = (x: number, y: number) =>{

    
    if( x >= 130 || y >= 270) return false

    return true
 }

return{ 
    x: pos.x,
    y: pos.y,
    moveDown,
    moveLeft,
    moveUp,
    moveRight
}

}


export default HookMapa