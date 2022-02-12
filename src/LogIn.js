import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';


 const LogIn = ({isLoged,setIsLoged}) => {
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');

    const navigate=useNavigate()

    const LogIn=async()=>{
        await axios.post('http://103.171.181.73:2000/admin/api/login/', {"username": email, "password": password}).then((res)=>{
            console.log(res.data.login);
            localStorage.setItem('data',res.data.login);
              const newdata= JSON.parse(JSON.stringify(localStorage.getItem('data'))) ;
              router();
            if(newdata===true){
                setIsLoged(true);    
            }
        });
        setIsLoged(true)
     
    }
    const router=()=>{
        console.log(localStorage.getItem('data'))
        if(localStorage.getItem('data')==="true"){
            navigate("/home")
            console.log(isLoged)
        }
        else{
            alert("you are npt valid user")
        }
        
    }

  return (
    <section className='login'>
        <div className='loginContainer'>
            <div className='tag'>
                <span >logIn</span>
            </div>
            <label >Email</label>
            <input type="text" name="" id="" autoFocus required onChange={(e)=>setEmail(e.target.value)} />
                <label htmlFor="">Password </label>
            <input type="password" required onChange={(e)=>setPassword(e.target.value)}/>
            <br />
            <a className='forget' href="http://" target="_blank" rel="noopener noreferrer">forgetPassword?</a> 
            <div className='btnContainer'>
                <button onClick={()=>LogIn()}>LogIn</button>
                  
            </div>
        </div>
    </section>
  )
}

export default LogIn
