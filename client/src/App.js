import './App.css';
import LessonSandbox from './Components/LessonSandbox';
import { UserProvider } from './Components/UserContext';
import { Routes, Route } from "react-router-dom";
// import Home from './Components/Home/Home';
// import Landing from './Components/Landing/Landing';
import Login from './Components/Login';
import NavBar from './Components/NavBar';
import AllLessonsPage from './Components/AllLessonsPage';
import LessonPage from './Components/LessonPage';
// import Footer from './Components/Footer/Footer';
import React, { useContext, useState, useEffect } from "react";

import 'react-daisyui'

function App() {

  const [lessons, setLessons] = useState([])
  // const { user, userLibrary, setUserLibrary, userLessons, setUserLessons } = useContext(UserContext);
  // console.log(`User lessons from context:`, userLessons)
  // This is where a users lessons will live

  // useUserLessons()
  // LessonType lives on this page
  // LessonSummary nested within LessonType
  // Notes can drop down from LessonSummary
  useEffect(() => {
      fetch('/your-lessons')
          .then(resp => resp.json())
          .then(lessons => {
              setLessons(lessons)
          })
  }, [setLessons])

  return (
    <div className="App">
      {/* The UserProvider provides us with the user state.  */}
      <UserProvider>
      <NavBar />
      <Routes>
        <Route path="/lesson-sandbox" element={<LessonSandbox />}/>
        <Route path="/login" element={<Login />}/>
        <Route path="/your-lessons" element={<AllLessonsPage lessons={lessons} setLessons={setLessons}/>}/>
        <Route path="/lesson/:id" element={<LessonPage lessons={lessons} setLessons={setLessons}/>}/>
      </Routes>
      </UserProvider>
    </div>
  );
}

export default App;
