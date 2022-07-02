import {BrowserRouter } from 'react-router-dom'
import UserContext from './contexts/userContext';
import { Router } from './Router';
import { useState } from 'react';

const App = () => {

const [user,setUser] = useState('RED')
const [pokeballs,setPokeballs] = useState(20)
const [pos, setPos] = useState({x: 100,y:230})
const speed = 5

return(
    <BrowserRouter>
    <UserContext.Provider value={{user, setUser,pokeballs,setPokeballs}}>
    <Router/>
    </UserContext.Provider>
    </BrowserRouter>
)

}

export default App;