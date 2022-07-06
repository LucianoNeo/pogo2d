import {Route, Routes} from 'react-router-dom'
import Loading from './pages/Loading'
import World from './pages/World'
import Catch from './pages/Catch'
import CharSelect from './pages/CharSelect'
import CharNameSelect from './pages/CharNameSelect'
import { AppleLogo } from 'phosphor-react'


export function Router() {
    return(
        <Routes>
            <Route path='*' element={ <Loading/>} />
            <Route path='/' element={ <Loading/>} />
            <Route path='/char-select' element={ <CharSelect/>} />
            <Route path='/char-name-select' element={ <CharNameSelect/>} />
            <Route path='/world' element={ <World/>} />
            <Route path='/catch' element={ <Catch/>} />
        </Routes>

        
    )
    
}