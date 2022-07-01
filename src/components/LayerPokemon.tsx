import { memo } from 'react'
import Pokemon from './Pokemon';


function LayerPokemon(){

return(
    <div id='layerPokemon'className='absolute w-[3000px] h-[3000px] z-10'>
  <Pokemon />
    </div>
  )
}

export default memo(LayerPokemon)
