import Utils from '../utils';

const utils = Utils()

const arr = Array.from({ length: 100 }).map(() => true);




function Pokemon(){
return(

  <>
{arr.map((_, index) => (        
   <div 
   key={index} 
   style={{width:'36px', position: 'absolute', left:`${utils.random(80,2900)}px`, top:`${utils.random(100,4900)}px`}}>
   <a href="#"> <img src={`../src/assets/img/pokemon/${utils.random(4,140)}.png`} alt="" className="w-[36px] h-[36px] "/>
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