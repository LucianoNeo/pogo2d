import { useEffect } from "react"
import { useContext } from "react"
import UserContext from "../contexts/userContext"
const soundError = new Audio("./assets/sfx/error.mp3")

function Popup(props) {


    const {msgPokeball}= useContext(UserContext)
    let turnon = 'none'
    
    if(msgPokeball){
        turnon='flex' 
        
        
    }
    else{
        turnon='none'
        soundError.pause()
    }
    
    return(
        <div className="absolute w-full h-full flex items-center justify-center z-50"> 
            <div className=" animate-fadein-out "
            style={{
                display:`${turnon}`,
                justifyContent:'center',
                alignItems:'center',
                textAlign: 'center',
                padding: '20px',
                width: '98%', 
                height:'100px',
                backgroundColor:'white',
                borderRadius:'5px',
                zIndex: '30',
                marginTop: '50px',
                opacity: '0',
                boxShadow: '5px 5px 1px 0px rgba(0,0,0,0.5)',
                fontSize: '16px',
            }}
            
            >
            <span>{props.text}</span>
            </div>
        </div>
    )
    
}

export default Popup