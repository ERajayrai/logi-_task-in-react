import React from 'react'
import { useNavigate } from 'react-router-dom';


 const Home = () => {
    const navigate=useNavigate()
    const logout=()=>{
        localStorage.removeItem('data');
        navigate('/')

    }
  return (
    <div className='App-header'>
        <h1>Welcome to home page </h1>
        <div>
            <button onClick={logout}>
                logout
            </button>
        </div>
    </div>
  )
}

export default Home;
