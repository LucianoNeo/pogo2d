import {Route, Routes } from 'react-router-dom'
import Loading from './pages/Loading'
import World from './pages/World'
import Catch from './pages/Catch'
import CharSelect from './pages/CharSelect'
import CharNameSelect from './pages/CharNameSelect'
import Loading2 from './pages/Loading2'
import PokemonBagScreen from './pages/PokemonBag'
import Continue from './pages/Continue'
import React from 'react'
import ItemsBag from './pages/ItemsBag'
import PokemonDetails from './pages/PokemonDetails'


export function Router() {
    return(
       
        <Routes>
            <Route path='*' element={ <Loading/>} />
            <Route path='/' element={ <Loading/>} />
            <Route path='/continue' element={ <Continue/>} />
            <Route path='/char-select' element={ <CharSelect/>} />
            <Route path='/char-name-select' element={ <CharNameSelect/>} />
            <Route path='/loading' element={ <Loading2/>} />
            <Route path='/world' element={ <World/>} />
            <Route path='/catch' element={ <Catch/>} />
            <Route path='/pkbag' element={ <PokemonBagScreen/>} />
            <Route path='/pkdetails' element={ <PokemonDetails/>} />
            <Route path='/itbag' element={ <ItemsBag/>} />
        </Routes>
        
    )
    
}