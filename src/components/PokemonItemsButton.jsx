import { Backpack } from 'phosphor-react'

function PokemonItemsButton(props) {

    return (
        <div className='items-center flex flex-col hover:scale-125'>
            <h1 style={{ color: '#1F5394', fontSize: '10px' }}>Items</h1>
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
                    <Backpack size={16} />
                </button>
            </div>
        </div>
    )
}

export default PokemonItemsButton
