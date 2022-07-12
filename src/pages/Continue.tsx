
import { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import UserContext from '../contexts/userContext';
import React from 'react';
import ConfirmButton from '../components/ConfirmButton';
import CloseButton from '../components/CloseButton';

const img = document.querySelector('img')
img.setAttribute("draggable", false);







function Continue() {

    
    const navigate = useNavigate()
    const soundSelect = new Audio("./assets/sfx/select.mp3")
    const soundError = new Audio("./assets/sfx/error.mp3")
    const soundPlayerSelect = new Audio("./assets/sfx/player-select.mp3")
    const { setcharFace, setcharSprite, setCharName, music, setLevel, data, setData, charFace, charName, charLevel, pokemonBag, setPokemonBag ,setPokeballs} = useContext(UserContext)
    

    useEffect(() => {
       
        music.current = new Audio("./assets/music/start.mp3")
        music.current.volume = 0.08
    }, [])


    function continueGame() {
        soundPlayerSelect.play()
        fullscreen()
        setTimeout(() => {
            navigate('/loading')   
        }, 1000);
        
    }

    function confirm() {
        soundError.play()
        fullscreen()
        const confirmScreen = document.getElementById('confirm')
        confirmScreen.style.display = 'flex'
    }

    function closeConfirm() {
        soundSelect.play()
        const confirmScreen = document.getElementById('confirm')
        confirmScreen.style.display = 'none'
    }


    function newGame() {
        soundSelect.play()
        localStorage.clear()
        localStorage.removeItem("pokemonbag");
        setPokemonBag([])
        setPokeballs(5)
        return navigate('/char-select')
    }

    let elem = document.documentElement

    function fullscreen() {
        if (window.screen.width < 600) {
            {
                if (elem.requestFullscreen) {
                    elem.requestFullscreen();
                } else if (elem.webkitRequestFullscreen) { /* Safari */
                    elem.webkitRequestFullscreen();
                } else if (elem.webkitSupportsFullscreen) { /* Safari */
                    elem.webkitEnterFullscreen();
                } else if (elem.msRequestFullscreen) { /* IE11 */
                    elem.msRequestFullscreen();
                }
            }
        }

    }


    

 
    return (
        <div id='tela' className='relative w-screen h-[100vh] overflow-hidden m-auto sm:w-[300px] sm:rounded-[20px] sm:border-[10px] sm:border-black sm:h-[90vh] sm:max-h-[600px] flex '
            style={{ background: 'linear-gradient(170deg, rgba(57,154,93,1) 20%, rgba(46,103,115,1) 83%)' }}>
 
            <div id='confirm' className='absolute left-2 top-44 w-[96%] h-[60%] bg-slate-50 text-center rounded justify-evenly items-center flex-col z-10 p-2  gap-4 hidden animate-screenShake text-xl sm:text-sm'
            style={{userSelect:'none',WebkitUserSelect:'none'}}
            >
                <img src="./assets/img/warning.png" alt="" 
                className='w-60 sm:w-40'
                />
                <h1 >CONFIRMA REMOÇÃO PERMANTENTE DOS DADOS?</h1>
                <div className='flex w-full h-20'>
                    <CloseButton onclick={closeConfirm} />
                    <ConfirmButton onclick={newGame}/>
                </div>
            </div>
            <div className='flex flex-col justify-start w-full py-9 h-full gap-10'>
                <div className='flex items-center justify-center'>
                    <img src="./assets/img/logo.png" alt="" width={200} />
                </div>
 
                <div className='flex w-full p-2 flex-col text-white items-center gap-7'>

                    <div className='w-[90%] h-28 flex items-center px-5 gap-4 border-2 rounded-md justify-between hover:scale-110 cursor-pointer'
                        onClick={continueGame}
                        style={{userSelect:'none',WebkitUserSelect:'none'}}
                    >
                        <img id='continue' src={charFace} alt=""
                            className='bg-red-400 rounded  h-24 cursor-pointer ' />
                        <div className='flex flex-col justify-center h-full' >
                            <p className='font-sans text-xs'>{charName}</p>
                            <p className='font-sans text-xs'>Level {charLevel}</p>
                            <p className='font-sans text-xs'>Capturados: {pokemonBag.length}</p>
                            <h1>CONTINUAR</h1>
                        </div>
                    </div>

                    <div className='w-[90%] h-28 flex items-center px-5 gap-4 border-2 rounded-md justify-between hover:scale-110 cursor-pointer'
                        onClick={confirm}
                    >

                        <h1>NOVO JOGO</h1>
                    </div>
                </div>

            </div>

        </div>
    )

}

export default Continue