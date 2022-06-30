


function Quadras(){

const arr = Array.from({ length: 300 }).map(() => true);

return(
  <>
{arr.map((_, index) => (        
    <div key={index} className={`bg-[#88f99f] border-green-100 border-[10px] 
    w-[250px] h-[450px]`
    }>
    </div>
    ))
}
  </>
  )
}

export default Quadras


//w-[${200 + Math.floor(Math.random() * 100)}px] 
//h-[${250 + Math.floor(Math.random() * 300)}px]`