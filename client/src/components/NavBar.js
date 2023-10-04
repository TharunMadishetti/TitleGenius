import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
export default function NavBar({theme,setTheme,logout,username,nfl,updateUser}){
    const [ user , setUser ] = useState(null);
    useEffect(()=>{
        console.log('theme changed to '+theme);
    
       },[theme])
    return (
    <div className={`bg-${theme ? 'gray-400' : 'black'} py-2  `}>
      <div className=" mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <a href="/" className="px-2">
          <h1 className=' p-5 font-bold text-3xl'>TitleGenius</h1>
          </a>
        </div>
        <div className="lg:flex space-x-4 items-center">
          <div className="relative group">
        <label
          htmlFor="theme"
          className={`cursor-pointer ${
            theme ? 'text-black' : 'text-white'
          } hover:bg-gray-500 hover:rounded-lg p-2`}
          onClick={(e) => setTheme(!theme)}
        >
           {theme ? '🌑' : '☀️'}
        </label>
        <input
          type="checkbox"
          className="hidden"
          name="theme"
        /> 
      </div>
      <Link
        to="/"
        className={`${
          theme ? 'text-black' : 'text-white'
        } hover:bg-gray-500 hover:rounded-lg p-2`}
      >
        Home 🏠
      </Link>
      <Link
        to="/mytitles"
        className={`${
          theme ? 'text-black' : 'text-white'
        } hover:bg-gray-500 hover:rounded-lg p-2`}
      >
        MyTitles
      </Link>
      <button
        className={`${
          theme ? 'text-black' : 'text-white'
        } hover:bg-gray-500 hover:rounded-lg p-2`}
        onClick={(e)=>updateUser(null)}
      >
        {username}
      </button>
      <button
        className={`${
          theme ? 'text-black' : 'text-white'
        } hover:bg-gray-500 hover:rounded-lg p-2`}
        onClick={logout}
      >
        Logout
      </button>
        </div>
      </div>
    </div>
  );
}