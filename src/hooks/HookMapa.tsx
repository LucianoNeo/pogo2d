import { useState } from 'react'

const speed = 50

const HookMapa = () => {

 const [pos, setPos] = useState({x: 100,y:230})

 const moveLeft = () =>{
      setPos(pos => ({

        x: canMove(pos.x + speed,pos.y) ? pos.x +speed : pos.x,
        y: pos.y
     }))
 }
 const moveRight = () =>{
   
     setPos(pos => ({
        x: canMove(pos.x -speed,pos.y) ? pos.x -speed : pos.x,
         y: pos.y
     }))
 }

 const moveDown = () =>{
     setPos(pos => ({
         x: pos.x , 
         y: canMove(pos.x,pos.y -speed) ? pos.y -speed : pos.y,
     }))
   
  }
 const moveUp = () =>{
      setPos(pos => ({
       x: pos.x , 
       y: canMove(pos.x,pos.y +speed) ? pos.y +speed : pos.y,
   }))

 } 
 
 
 const canMove = (x: number, y: number) =>{

    console.log(x,y);
    
    if( x >= 130 || y >= 290 ) return false
    if( y < -4660 ) return false
    if( x < -2840 ) return false
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