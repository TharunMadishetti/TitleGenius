import React,{useState,useEffect} from 'react'
import {Link,useNavigate} from 'react-router-dom'
import axios from 'axios'
import { registerRoute } from '../Utils/APIRoutes';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
export default function Register({user,setUser}) {
      const toastOptions = {
        position: "bottom-right",
        autoClose: 5000,
        pauseOnHover: false,
        draggable: true,
        theme: "dark",
      };
    const navigate = useNavigate();
    const [uname,setUname]=useState("");
    const [email,setEmail]=useState("");
    const [pswd,setPswd]=useState("");
    const [cpswd,setCpswd]=useState("");
    useEffect(()=>{
        if (user) {
          navigate("/");
        } 
      },[])
    const handleSubmit =async (e)=>{
        e.preventDefault();
        if(validateForm()){

            await axios.post(registerRoute,{
                username:uname,
                email,
                password:pswd,
            })
            .then((res) => {
                // Signed in
                res=res.data;
                const usr = res.user;
                if(res.status===true)
                {
                    toast.success(res.message,toastOptions);
                    setUser(usr);
                    localStorage.setItem('user',JSON.stringify(usr));
                    navigate("/");
                }
                else
                toast.error(res.message,toastOptions);
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode, errorMessage);
            });
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
        if (uname.length < 6) {
            toast.error('Username must contain at least 6 letters',toastOptions);
            return;
        }
        if (!/^[a-z]+$/.test(uname)) {
            toast.error('Username must contain only lowercase letters',toastOptions);
            return;
        }
    
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            toast.error('Invalid email address',toastOptions);
            return;
        }
        if (pswd !== cpswd) {
            toast.error('Passwords do not match',toastOptions);
            return;
        } else {
           if(isValidPassword(pswd))
           return true;
        }
    
        return false;
    }
    return (
    <div className='bg-gray-200 h-screen flex justify-center items-center text-black'>
        <div className='bg-white flex flex-col p-5 justify-center items-center rounded-3xl'>
        <h1 className=' p-5 font-bold text-3xl'>TitleGenius</h1>
        <form className='flex flex-col space-y-3 p-5 w-80' onSubmit={handleSubmit}>
            <input type="text" name="username" placeholder='Username'  className='p-2 align-left border-border-solid border-2 border-gray-400 hover:border-black'  onChange={e=>setUname(e.target.value)}/>
            <input type="text" name="email" placeholder='Email address' className='p-2 align-left border-border-solid border-2 border-gray-400 hover:border-black' required onChange={e=>setEmail(e.target.value)}/>
            <input type="password" name="password" placeholder='Password' className='p-2 align-left border-border-solid border-2 border-gray-400 hover:border-black' required onChange={e=>setPswd(e.target.value)}/>
            <input type="text" name="cpassword" placeholder='Confirm password' className='p-2 align-left border-border-solid border-2 border-gray-400 hover:border-black' required onChange={e=>setCpswd(e.target.value)}/>
            <button type='submit'  className='bg-gray-600 text-white rounded-md p-2 font-semibold hover:bg-gray-500' >Sign Up</button>
        </form>
        <p className='text-sm text-center'>Have an account? <Link to="/login"><span className='font-semibold'>Sign In</span></Link></p>
        <br/>
        
        </div>
        <ToastContainer/>
    </div>
  )
}
