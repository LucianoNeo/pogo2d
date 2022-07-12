import { PawPrint } from 'phosphor-react'

function PokemonBagButton(props) {

    return (
        <div className='items-center flex flex-col hover:scale-125'>
            <h1 style={{ color: '#1F5394', fontSize: '10px' }}>Pokémon</h1>
            <div
                
                style={{
                    display: 'flex',
                    backgroundColor: '#1F8394',
                    width: '40px',
                    height: '40px',
                    color: 'white',
                    margin: '0 auto',
                    textAlign: 'center',
                    borderRadius: '100%',
                    alignItems: 'center',
                    flex: 'row',
                    justifyContent: 'center',
                    margin: '0 auto'

                }}
            >
                <button

                    style={{
                        display: 'flex',
                        backgroundColor: '#1F8394',
                        width: '85%',
                        height: '85%',
                        color: 'white',
                        margin: '0 auto',
                        textAlign: 'center',
                        borderRadius: '50%',
                        border: 'solid 2px #9CF5E7 ',
                        alignItems: 'center',
                        justifyContent: 'center',

                    }}
                    onClick={props.onclick}
                >
                    <PawPrint size={16} />
                </button>
            </div>
        </div>
    )
}

export default PokemonBagButton



//bg-[#1F8394] w-12 h-12 text-white border-2 hover:scale-105 border-[#9CF5E7]