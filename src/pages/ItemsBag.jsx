import { useContext, useState, useMemo, useEffect } from "react"
import CloseButton from "../components/CloseButton"
import UserContext from "../contexts/userContext"
import { useNavigate } from 'react-router-dom'
import { Trash, TrashSimple } from "phosphor-react"



function ItemsBag() {


    const { music, pokeballs ,soundON} = useContext(UserContext)
    const [busca, setBusca] = useState('')
    const navigate = useNavigate()


    useEffect(() => {
        music.current.pause()
        music.current = new Audio("./assets/music/menutheme.mp3")
        if(soundON.current){
        music.current.play()
    }
    }, [])

    return (
        <div id='tela' className='relative w-screen h-[100vh] overflow-hidden m-auto sm:w-[300px] sm:rounded-[20px] sm:border-[10px] sm:border-black sm:h-[90vh] sm:max-h-[600px] flex items-center justify-center'
            style={{ background: 'linear-gradient(170deg, rgba(57,154,93,1) 20%, rgba(46,103,115,1) 83%)' }}
        >
            <div className="w-[95%] h-full bg-white p-2 flex flex-col items-center text-center gap-3">

                <h1 className="mt-5">ITEMS</h1>
                <hr style={{height:'1px',color:'black',width:'100%'}}></hr>
                <div className="flex items-center gap-4 p-1 justify-between w-full relative">
                    <img src="./assets/img/pokeball_catch.png" alt="" width={80} />
                    <div className="bottom-2 left-2 absolute bg-gray-400 rounded-xl p-1 text-center items-center flex justify-center opacity-80">
                        <p className="font-sans font-bold">x{pokeballs}</p>
                    </div>
                    <div className="flex flex-col items-start">
                        <p>Poké Bola</p>
                        
                        <p className="sm:text-xs font-sans text-justify">Um dispositivo para pegar Pokémon selvagens, que é jogado como uma bola os encapsulando</p>
                    </div>
                    <div className="absolute right-3 top-2 cursor-pointer">
                    <Trash/>
                    </div>
                </div>
                <div className="absolute bottom-4">
                <CloseButton onclick={()=>{navigate('/world'),music.current.pause()}}/>
                </div>
            </div>

        </div>

    )
}

export default ItemsBag