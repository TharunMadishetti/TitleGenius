import React, { useEffect, useState } from 'react'
import Login from './components/Login';
import Register from './components/Register';
import { Routes,Route, useNavigate } from 'react-router-dom';
import NavBar from './components/NavBar';
 import Footer from './components/Footer';
 import Home from './components/Home';
import axios from 'axios';
import MyTitles from './components/MyTitles'
import { loginRoute } from './Utils/APIRoutes';
import ErrorPage from './components/ErrorPage';
// import Home from './components/Home';
// import Footer from './components/Footer';
function App() {
  const navigate = useNavigate();
  const [theme,setTheme] = useState(true);
  const [user,setUser]=useState(null);
  useEffect(()=>{
    if (!user && !localStorage.getItem('user')) {
      navigate("/login");
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
  const logout = (e)=>{
    setUser(null);
    localStorage.clear();
    navigate('/login');
  }

  const updateUser = async () => {
     console.log('user updated');
     
  }
 
  return (

    <div className={`App h-screen ${!theme?"bg-black text-white":""} flex flex-col justify-between`}>
        {user && <NavBar className='' theme={theme} updateUser={updateUser} setTheme={setTheme} username={user.username} logout={logout} />}
        {/* <NavBar className='' theme={theme} setTheme={setTheme} logout={logout} /> */}
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/mytitles" element={<MyTitles theme={theme}/>}/>
            <Route exact path='/login' element={<Login user={user} setUser={setUser}/>}/>
            <Route exact path='/register' className={`App h-screen ${theme?"bg-black text-white":""}`} element={<Register user={user} setUser={setUser}/>}/>
            <Route exact path="*" element={<ErrorPage errorCode={404} errorMessage="Page Not Found"/>}/>
        </Routes>
        <Footer/>
    </div>
  );
}

export default App;