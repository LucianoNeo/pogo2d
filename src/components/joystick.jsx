import buttonUp from '../assets/img/up.png'
import HookMapa from '../hooks/HookMapa';

function Joystick() {

    const mapa = HookMapa()


    return (
        <div className="absolute w-20 h-20 left z-30 flex  flex-col justify-center items-center">
            <img src={buttonUp} alt=""
            onClick={()=>{mapa.moveUp()}}
            style={{width:'30px',height:'30px',cursor:'pointer'}}/>
            <div className='flex flex-row w-full justify-between '>
            <img src={buttonUp} alt="" 
            style={{width:'30px',height:'30px',transform:'rotate(-90deg)',cursor:'pointer'}}/>
            <img src={buttonUp} alt="" 
            style={{width:'30px',height:'30px',transform:'rotate(90deg)',cursor:'pointer'}}/>
            </div>
            <img src={buttonUp} alt="" 
            style={{width:'30px',height:'30px',transform:'rotate(180deg)',cursor:'pointer'}}/>

        </div>
    )
    
}

export default Joystick