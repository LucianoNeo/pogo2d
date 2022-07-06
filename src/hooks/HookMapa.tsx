import { useState, useContext } from 'react'
import UserContext from '../contexts/userContext';


const HookMapa = () => {

    
    const {posGlobal,screenHeight,screenWidth,speed}= useContext(UserContext)
    
    const [pos, setPos] = useState({x:posGlobal.x,y:posGlobal.y})


    const moveLeft = () =>{
      setPos(pos => ({

        x: canMove(pos.x + speed,pos.y) ? pos.x +speed : pos.x,
        y: pos.y,
        
     }))
  
     
 }
 const moveRight = () =>{
   
     setPos(pos => ({
        x: canMove(pos.x -speed,pos.y) ? pos.x -speed : pos.x,
         y: pos.y,
         
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

    
    if( x >= screenWidth.current*0.55 || y >= screenHeight.current*0.55 ) return false
    if( y < (screenHeight.current*0.45)-4900 ) return false
    if( x < (screenWidth.current*0.45)-3000 ) return false
    return true
 }

return{ 
    x:pos.x,
    y:pos.y,
    moveDown,
    moveLeft,
    moveUp,
    moveRight
}

}


export default HookMapa