import { useEffect } from 'react';
import { useNavigate   } from 'react-router-dom'

const music = new Audio("./assets/music/start.mp3")
function Loading2() {

const navigate = useNavigate()

useEffect(() => {
    music.play()
    setTimeout(() => {
        return navigate('/world')
    }, 7000);
    
}, [])


    return(
        <div id='tela' className='relative w-screen h-[100vh] overflow-hidden bg-white m-auto sm:w-[300px] sm:rounded-[20px] sm:border-[10px] sm:border-black sm:h-[90vh] flex flex-col items-center justify-evenly opacity-85 sm:max-h-[600px]'
        style={{
            backgroundImage:'url(./assets/img/loading.png)',
            backgroundSize:'cover',
        }}
        >
         <div className="bg-gray-200 h-5 mb-6 flex items-center rounded-xl" style={{width: '90%',height:'20px',bottom:'120px', position:'absolute'}}>
        <div className="bg-blue-600 rounded-xl" 
        style={{
            width: '100%',
            height:'20px',
            animation: 'load 5s ease-in-out'
            }}></div>
        </div>
        
       
        </div>
    )
    
}

export default Loading2