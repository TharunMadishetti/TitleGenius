import React,{useEffect, useState} from 'react'
import {Link,useNavigate} from 'react-router-dom'
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from 'axios';
import { loginRoute } from '../Utils/APIRoutes';
export default function Login({user,setUser}) {
    const toastOptions = {
        position: "bottom-right",
        autoClose: 8000,
        pauseOnHover: true,
        draggable: true,
        theme: "dark",
      };
    const navigate=useNavigate();
    const [email,setEmail]=useState("");
    const [pswd,setPswd]=useState("");
    useEffect(()=>{
        if (!user && !localStorage.getItem('user')) {
             console.log('ok')
          } else {
            const get =async ()=>{
              return await JSON.parse(localStorage.getItem('user'))
            }
            get()
            .then((res)=>{
              setUser(res)
            });
          }
      },[])
    const handleSubmit = async  (e)=>{
        e.preventDefault();
        if(!validateForm())
        return;

        try
        {
        let res = await axios.post(loginRoute,{
            email,
            password:pswd,
        })
            res=res.data;
            if(res.status===true)
            {
                const usr = res.user;
                setUser(usr);
                localStorage.setItem('user',JSON.stringify(usr));
                navigate("/")
            }
            else
            toast.error(res.message,toastOptions);
        }
        catch(error)
        {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode, errorMessage)
        }
       
    }
    const isValidPassword = () => {
        const minPasswordLength = 6;
        const hasLowerCase = /[a-z]/.test(pswd);
        const hasUpperCase = /[A-Z]/.test(pswd);
        const hasNumbers = /[0-9]/.test(pswd);
        const hasSpecialChars = /[!@#$%^&*()_+{}[\]:;<>,.?~\\-]/.test(pswd);
        if (pswd.length < minPasswordLength) {
            toast.error('Password must be at least 6 characters long',toastOptions);
            return false;
        } else if (!hasLowerCase || !hasUpperCase || !hasNumbers || !hasSpecialChars) {
            toast.error( 'Password must contain at least one uppercase,number, and one of the special characters',toastOptions);
            return false;
        }
        
        return true;
    }
    
    const validateForm = () => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            toast.error('Invalid email address',toastOptions);
            return false;
        }
        
        if(isValidPassword(pswd))
        return true;
    
        return false;
    }
    return (
    <div className='bg-gray-100 h-screen flex justify-center items-center text-black ' onSubmit={handleSubmit}>
        <div className='bg-white flex flex-col p-5 justify-center items-center rounded-3xl'>
        <h1 className=' p-5 font-bold text-3xl'>TitleGenius</h1>
        <form className='flex flex-col space-y-3 px-5 py-2 w-80'>
            <input type="text" name="email" placeholder='Username or E-mail' className='p-2 align-left border-solid border-2 border-gray-400 hover:border-black' onChange={(e)=>setEmail(e.target.value)}/>
            <input type="password" name="password" placeholder='Password' className='p-2 align-left border-solid border-2 border-gray-400 hover:border-black' onChange={(e)=>setPswd(e.target.value)}/>
            <button type='submit'  className='bg-gray-600 text-white rounded-md p-2 font-semibold hover:bg-gray-500'>Sign In</button>
        </form>
        <div className='px-5 flex flex-col justify-center w-80 items-center'>
            <Link to="/register"><span className='font-semibold '>Sign Up</span></Link>
        </div>
        <br/>
      
        </div>
        <ToastContainer/>
    </div>
  )
}
