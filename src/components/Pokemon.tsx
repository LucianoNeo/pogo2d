
function Pokemon(){

    const arr = Array.from({ length: 10 }).map(() => true);
    

    
        return(
        <div key={arr.length} className={` relative w-[36px] h-[36px] left-[${Math.floor(Math.random() * 170)}px] top-[148px]`}>
            <img src={`../src/assets/img/pokemon/1.png`} alt="" />
        </div>
        )
    
    
    }
    
    export default Pokemon
    
    
    //w-[${200 + Math.floor(Math.random() * 100)}px] 
    //h-[${250 + Math.floor(Math.random() * 300)}px]`