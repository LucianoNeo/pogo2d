


function Quadras(){

const arr = Array.from({ length: 300 }).map(() => true);

return(
  <>
{arr.map((_, index) => (        
    <div key={index} className={`bg-[#88f99f] border-green-100 border-[10px] 
    w-[250px] h-[450px] items-center justify-center flex`}>
      <a href="#"><img src={`../src/assets/img/pokemon/${index+1}.png`} alt="" className="w-[36px] h-[36px] left-10 "/></a>
      
    </div>
    ))
}
  </>
  )
}

export default Quadras


//w-[${200 + Math.floor(Math.random() * 100)}px] 
//h-[${250 + Math.floor(Math.random() * 300)}px]`