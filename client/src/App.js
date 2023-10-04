import React, { useEffect, useState } from 'react'
import Login from './components/Login';
import Register from './components/Register';
import { Routes,Route, useNavigate } from 'react-router-dom';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import axios from 'axios';
import MyTitles from './components/MyTitles'
import { loginRoute } from './Utils/APIRoutes';
import ErrorPage from './components/ErrorPage';
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
     console.log(user);
    try
    {

      let res = await axios.post(loginRoute,{
        email:user.email,
        password:'aaA.1&'
      })
      res=res.data;
      console.log('new user');
      setUser(res.user);
    }
    catch(err)
    {
      console.log(err)
    }
  }
 
  return (
    <div className={`App h-screen ${!theme?"bg-black text-white":""}`}>
        {user && <NavBar className='' theme={theme} setTheme={setTheme} logout={logout} username={user.username}/>}
        <Routes>
            <Route path="/" element={<p>Home</p>}/>
            <Route path="/mytitles" element={<MyTitles theme={theme}/>}/>
            <Route exact path='/register' className={`App h-screen ${theme?"bg-black text-white":""}`} element={<Register user={user} setUser={setUser}/>}/>
            <Route exact path='/login' element={<Login user={user} setUser={setUser}/>}/>
            <Route exact path="*" element={<ErrorPage errorCode={404} errorMessage="Page Not Found"/>}/>
        </Routes>
        <Footer/>
    </div>
  );
}

export default App;