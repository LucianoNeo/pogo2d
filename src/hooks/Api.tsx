import { useEffect, useState } from 'react'
import axios from 'axios'

const Api = () => {

const [pokemons,setPokemon] = useState([])

useEffect(() => {
   async function puxaDados() {
      for (let i = 1; i <= 151; i++) {
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${i}`)
        setPokemon(prevState => [...prevState, response.data])
      }

    }
    puxaDados()
}, [])


 
 
return{ 
    pokemons
}

}


export default Api