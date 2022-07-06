import { useState } from "react";
import Mapa from "../components/Mapa";
import HookMapa from "./HookMapa";

const JoystickController = (stickID, maxDistance, deadzone)=>
{

 
	// stickID: ID of HTML element (representing joystick) that will be dragged
	// maxDistance: maximum amount joystick can move in any direction
	// deadzone: joystick must move at least this amount from origin to register value change
	
        
        let id = stickID;
		let stick = document.getElementById(stickID);

		// location from which drag begins, used to calculate offsets
		let dragStart = null;

		// track touch identifier in case multiple joysticks present
		let touchId = null;
		
		let active = false;
		let value = { x: 0, y: 0 }; 


		function handleDown(event)
		{
		    active = true;
            
			// all drag movements are instantaneous
			stick.style.transition = '0s';

			// touch event fired before mouse event; prevent redundant mouse event from firing
			event.preventDefault();

		    if (event.changedTouches)
		    	dragStart = { x: event.changedTouches[0].clientX, y: event.changedTouches[0].clientY };
		    else
		    	dragStart = { x: event.clientX, y: event.clientY };

			// if this is a touch event, keep track of which one
		    if (event.changedTouches)
		    	touchId = event.changedTouches[0].identifier;
		}
		
		function handleMove(event) 
		{
		    if ( !active ) return;

		    // if this is a touch event, make sure it is the right one
		    // also handle multiple simultaneous touchmove events
		    let touchmoveId = null;
		    if (event.changedTouches)
		    {
		    	for (let i = 0; i < event.changedTouches.length; i++)
		    	{
		    		if (touchId == event.changedTouches[i].identifier)
		    		{
		    			touchmoveId = i;
		    			event.clientX = event.changedTouches[i].clientX;
		    			event.clientY = event.changedTouches[i].clientY;
		    		}
		    	}

		    	if (touchmoveId == null) return;
		    }

		    const xDiff = event.clientX - dragStart.x;
		    const yDiff = event.clientY - dragStart.y;
		    const angle = Math.atan2(yDiff, xDiff);
			const distance = Math.min(maxDistance, Math.hypot(xDiff, yDiff));
			const xPosition = distance * Math.cos(angle);
			const yPosition = distance * Math.sin(angle);

			// move stick image to new position
		    stick.style.transform = `translate3d(${xPosition}px, ${yPosition}px, 0px)`;

			// deadzone adjustment
			const distance2 = (distance < deadzone) ? 0 : maxDistance / (maxDistance - deadzone) * (distance - deadzone);
		    const xPosition2 = distance2 * Math.cos(angle);
			const yPosition2 = distance2 * Math.sin(angle);
		    const xPercent = parseFloat((xPosition2 / maxDistance).toFixed(4));
		    const yPercent = parseFloat((yPosition2 / maxDistance).toFixed(4));
		    
		    value = { x: xPercent, y: yPercent };
		  }

		function handleUp(event) 
		{
		    if ( !active ) return;

		    // if this is a touch event, make sure it is the right one
		    if (event.changedTouches && touchId != event.changedTouches[0].identifier) return;

		    // transition the joystick position back to center
		    stick.style.transition = '.2s';
		    stick.style.transform = `translate3d(0px, 0px, 0px)`;
            

            
          
              
            if (value.x <= -0.9 ) {
                console.log('move esquerda')    
            } 
            if (value.y >= 0.9  ) {
                console.log('move baixo')    
            } 
            if (value.y <= -0.9 ) {
                console.log('move cima')    
            } 


		    // reset everything
		    value = { x: 0, y: 0 };
		    touchId = null;
		    active = false;
		}
        
        stick.addEventListener('mousedown', handleDown);
		stick.addEventListener('touchstart', handleDown);
	
        
        const handleright =( callback ) => {
            if (value.x >= 0.9 ) {
                    
                    console.log('dentro')  
					callback(nome)
                    
                }
                
            } 

            function handleleft() {
                if (value.x <= -0.9 ) {
                        
                        console.log('move esquerda')  
                        
                    }
                    
                } 

                function handledown() {
                    if (value.y >= 0.9 ) {
                            
                            console.log('move baixo')  
                            
                        }
                        
                    } 

                    function handleup() {
                        if (value.y <= -0.9 ) {
                                
                                console.log('move cima')  
                                
                            }
                            
                        } 
        


function loop()
{
	requestAnimationFrame(loop)
    handleright()
    handleleft()
    handleup()
    handledown()
}

return{
    x: value.x,
    y: value.y,
    loop,
    handleUp,
    handleMove,
    handleDown,
    handleright,
    handleleft,
    handleup,
    handledown
}

}

export default JoystickController