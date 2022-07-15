import React from 'react'
import { useContext } from 'react'
import UserContext from '../contexts/userContext'


type Props = {
    position: number;
}


export const Character = (props) => {
    const { walking, screenWidth, screenHeight, charSprite } = useContext(UserContext)

    return (
        <div id='character' style={{ width: '64px', height: '64px', position: 'relative', left: `${screenWidth.current * 0.5 - 32}px`, top: `${screenHeight.current * 0.5}px`, overflow: 'hidden', zIndex: '12' }}>
            <div className={`${walking && "animate-walking"}`}
                style={{
                    top: `${props.position}px`,
                    position: 'absolute',
                    width: '256px',
                    height: '256px',
                    imageRendering: 'pixelated'
                }}>
                <img draggable='false' src={charSprite} alt="" />
            </div>
        </div>
    )
}