import {Gear} from 'phosphor-react'
import { useContext } from 'react'

function Settings() {

    return(
       <div className=' z-30 flex absolute w-full top-7 text-white  items-end justify-end px-2'>
        <Gear onclick={()=>{}} size={32} className='cursor-pointer hover:text-blue-600'/>
        
       </div>
    )
}

export default Settings



