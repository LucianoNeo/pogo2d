import { useContext, useEffect, useMemo, useState } from "react"
import { useNavigate } from 'react-router-dom'
import CloseButton from "../components/CloseButton"
import UserContext from "../contexts/userContext"


function PokemonBagScreen() {


    const { pokemonBag, setPokemonBag, music, soundON, screenH } = useContext(UserContext)
    const [busca, setBusca] = useState('')
    const navigate = useNavigate()
    const filtrados = useMemo(() => {
        return pokemonBag.filter((filtrado) => filtrado.name.toLowerCase().includes(busca.toLowerCase()))
    }, [, pokemonBag, busca])

    useEffect(() => {
        music.current.pause()
        music.current = new Audio("./assets/music/menutheme.mp3")
        if (soundON.current) {
            music.current.volume = 0.08
            music.current.play()
        }
    }, [])


    if (pokemonBag === []) return <></>

    
    return (
        <div id='tela' className='relative w-screen overflow-hidden m-auto sm:w-[300px] sm:rounded-[20px] sm:border-[10px] sm:border-black sm:h-[90vh] sm:max-h-[600px] flex items-center justify-center'
            style={{ height: `${screenH.current}vh`, background: 'linear-gradient(170deg, rgba(57,154,93,1) 20%, rgba(46,103,115,1) 83%)' }}

        >
            <div className="w-[95%] h-full bg-white p-2 flex flex-col items-center text-center">

                <h1>POKÉMON</h1>
                <h2>{pokemonBag.length}</h2>
                <input autoComplete="off"
                    className="px-5 py-2 rounded-2xl bg-gray-100 text-center"
                    type="text" name="busca" id="" value={busca}
                    onChange={(ev) => setBusca(ev.target.value)}
                    placeholder='🔍 Procurar' />

                <div className="flex w-full flex-wrap mb-5 h-[77vh] sm:h-[68%] overflow-auto justify-center items-start ">

                    {filtrados.map((pokemon) =>
                        <div className="hover:scale-110 w-28 h-28 flex  flex-col justify-around text-center  sm:w-14 sm:h-16 sm:mb-14 sm:mx-2 mt-8 gap-4"
                            key={pokemon.id}>
                            <div className="flex text-center items-center gap-2 justify-center ">
                                <span className="text-sm font-mono">CP </span>
                                <p>{pokemon.cp}</p>
                            </div>
                            <div className="h-12 flex w-gull items-center justify-center ">
                                <img src={pokemon.imgbag} alt='' draggable='false' style={{ margin: '0 auto' }} />
                            </div>
                            <p className="text-md sm:text-xs font-mono">{pokemon.name}</p>

                        </div>
                    )}
                </div>
                <div className="flex w-full items-center justify-center">
                    <div className="absolute bottom-6">
                        <CloseButton onclick={() => { return navigate('/world'), music.current.pause() }} />
                    </div>
                </div>


            </div>

        </div>

    )
}

export default PokemonBagScreen