
import { useEffect } from 'react';
import { useNavigate   } from 'react-router-dom'


function Loading() {

    const navigate = useNavigate()
    

useEffect(() => {
    setTimeout(() => {
        return navigate('/world')
        
    }, 5000);
}, [])


    return(
        <div id='tela' className='relative w-screen h-screen overflow-hidden bg-white m-auto sm:w-[300px] sm:rounded-[20px] sm:border-[10px] sm:border-black sm:h-[98vh] flex items-center justify-center'>
       <h1 className="text-2xl text-center animate-fadein">Desenvolvido por LucianoNeo</h1>
    </div>
    )
    
}

export default Loading