import { memo } from 'react'



function Quadras(){

const arr = Array.from({ length: 1000 }).map(() => true);

return(
  <div style={{display:'flex', flexWrap:'wrap', width:'3500px',height:'5000px', position:'relative',backgroundColor:'#88f99f',overflow:'hidden', borderRadius:'30px'}}>
{arr.map((_, index) => (
  
    <div style={{imageRendering: 'pixelated',width:`250px`, height:`450px`}}key={index} className={`bg-[#88f99f] border-green-100 border-[10px]`}>
    </div>
    ))
}
  </div>
  )
}

export default memo(Quadras)
