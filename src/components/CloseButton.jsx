
function CloseButton(props) {

    return(
       <div
       className='hover:scale-110' 
       style={{
        display:'flex',
        backgroundColor:'#1F8394',
        width: '50px',
        height: '50px',
        color: 'white',
        margin: '0 auto',
        textAlign: 'center',
        borderRadius :'100%',
        alignItems:'center',
        flex:'row',
        justifyContent:'center',
        margin:'0 auto'

    }}
       >
        <button
        
        style={{
            display:'flex',
            backgroundColor:'#1F8394',
            width: '85%',
            height: '85%',
            color: 'white',
            margin: '0 auto',
            textAlign: 'center',
            borderRadius :'50%',
            border:'solid 2px #9CF5E7 ',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize:'14px',
            fontFamily: "sans-serif"
            
        }}
        onClick={props.onclick}
        >
        X
        </button>
       </div>
    )
}

export default CloseButton
