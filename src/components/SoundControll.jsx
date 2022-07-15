import { SpeakerHigh } from 'phosphor-react'


function SoundControll() {

    return (
        <div className='absolute'>
            <SpeakerHigh onclick={() => { music.stop() }} size={32} className='cursor-pointer ' />

        </div>
    )
}

export default SoundControll
