import {Route, Routes} from 'react-router-dom'
import Loading from './pages/Loading'
import World from './pages/World'
import Catch from './pages/Catch'


export function Router() {
    return(
        <Routes>
            <Route path='/' element={ <Loading/>} />
            <Route path='/world/' element={ <World/>} />
            <Route path='/catch/' element={ <Catch/>} />
            
        </Routes>

        
    )
    
}