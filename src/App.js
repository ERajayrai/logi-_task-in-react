
import './App.css';
import  LogIn  from './LogIn';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  Routes,
  Route
} from "react-router-dom";
import  Home  from './Home';
import {useEffect, useState} from 'react'
import { useNavigate } from 'react-router-dom';

function App() {
  const [isLoged,setIsLoged]=useState(false);
  const navigate=useNavigate()

  useEffect(()=>{
    if(localStorage.getItem('data')==='true'){
      navigate('/home')
    }
  },[])
  return (
    <div className="App">
   
  <Routes>
        <Route exact path="/" element={<LogIn  setIsLoged={setIsLoged} isLoged={isLoged}/> } / >
        <Route path="/home" element={<Home />}/>
    </Routes>
  
    </div>
  );
}

export default App;
