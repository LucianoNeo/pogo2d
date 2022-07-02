import Utils from '../utils';
import {useNavigate} from 'react-router-dom'


const utils = Utils()

const arr = Array.from({ length: 100 }).map(() => true);





function Pokemon(){
  const navigate = useNavigate()
  
return(

  <>
{arr.map((_, index) => (        
   <div id={`${index}`} key={index}
   style={{width:'36px', position: 'absolute', left:`${utils.random(80,2900)}px`, top:`${utils.random(100,4900)}px`}}>
   <a href="#" onClick={()=>{
    let deletePoke = document.getElementById(`${index}`)
    deletePoke.style.display= 'none'
    return navigate('/catch')
    }}> <img src={`../src/assets/img/pokemon/${utils.random(4,140)}.png`} alt="" className="w-[36px] h-[36px] "/>
   </a>
 </div>
    ))
}
  </>
    )
    
    }
    
    export default Pokemon
    
    
    //w-[${200 + Math.floor(Math.random() * 100)}px] 
    //h-[${250 + Math.floor(Math.random() * 300)}px]`