import {SpeakerSimpleSlash,SpeakerHigh} from 'phosphor-react'
import { useContext } from 'react'

function SoundControll() {




    return(
       <div className='z-30 absolute'>
        <SpeakerHigh onclick={()=>{music.stop()}} size={32} className='cursor-pointer'/>
        
       </div>
    )
}

export default SoundControll



//bg-[#1F8394] w-12 h-12 text-white border-2 hover:scale-105 border-[#9CF5E7]