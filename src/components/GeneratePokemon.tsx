
import React from 'react';
import { memo } from 'react';
import Pokemon from './Pokemon';
import Pokestop from './Pokestop';


const arr = Array.from({ length: 150 }).map(() => true);

function GeneratePokemon() {


  return (
    <>
      {arr.map((_, index) => (
        <>
          <Pokemon index={index} />

        </>
      ))
      }
    </>
  )
}
export default memo(GeneratePokemon)