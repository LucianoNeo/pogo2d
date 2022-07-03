import Utils from '../utils';
import {useNavigate} from 'react-router-dom'
import { useState,useContext,memo } from 'react';
import UserContext from '../contexts/userContext';
import stopblue from '../assets/img/pokestopblue.png'
import stoppink from '../assets/img/pokestoppink.png'
import Pokemon from './Pokemon';
import Pokestop from './Pokestop';


const utils = Utils()

const arr = Array.from({ length: 200 }).map(() => true);

function Generate(){
  const navigate = useNavigate()
  
return(
  <>
{arr.map((_, index) => (        
  <> 
 <Pokemon index={index}/>
 <Pokestop index={index}/>
 </>
    ))
}
</>
)
}
    export default memo(Generate)