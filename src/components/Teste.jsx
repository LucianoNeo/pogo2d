import { useEffect } from "react";

function Teste() {
    
let intervalo

function pressionado(){
    console.log('funcionando');
 }

 
 function mouseDown(callback) {
    intervalo = setInterval(callback, 400);
 }
 
 function mouseUp() {
    clearInterval(intervalo);
 }



return(
    <div className="absolute z-50 w-9 h-9 flex bg-slate-100">
        <button className="bg-slate-500 hover:bg-black z-50 cursor-pointer" id='botaoteste' onMouseDown={mouseDown} onMouseUp={mouseUp}>TESTE</button>
    </div>
)


}

export default Teste