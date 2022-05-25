import './App.css';
import LessonSandbox from './Components/LessonSandbox';
import { UserProvider } from './Components/UserContext';
import { Routes, Route } from "react-router-dom";
import Login from './Components/Login';
import NavBar from './Components/NavBar';
import AllLessonsPage from './Components/AllLessonsPage';
import LessonPage from './Components/LessonPage';
import React, { useContext, useState, useEffect } from "react";
import { UserContext } from "./Components/UserContext";
import useLoginState from './Components/CustomHooks/useLoginState';
import 'react-daisyui'

function App() {
  

  useLoginState()

  const { user, setUser, isLoggedIn, setIsLoggedIn, userLessons, setUserLessons } = useContext(UserContext);
  const [lessons, setLessons] = useState([])

  useEffect(() => {
      fetch('/your-lessons')
          .then(resp => resp.json())
          .then(lessons => {
              setLessons(lessons)
          })
  }, [setLessons, useLoginState, setUser, setIsLoggedIn])

  return (

    <div className="App" data-theme="light">
      
      {/* The UserProvider provides us with the user state.  */}
      {/* <UserProvider> */}
      <NavBar />
      <Routes>
        <Route path="/lesson-sandbox" element={<LessonSandbox />}/>
        <Route path="/login" element={<Login />}/>
        <Route path="/" element={<Login />}/>
        <Route path="/your-lessons" element={<AllLessonsPage lessons={lessons} setLessons={setLessons}/>}/>
        <Route path="/lesson/:id" element={<LessonPage lessons={lessons} setLessons={setLessons}/>}/>
      </Routes>
      {/* </UserProvider> */}
    </div>

  );
}

export default App;
