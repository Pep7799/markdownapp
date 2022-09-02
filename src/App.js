import {Routes, Route} from 'react-router-dom'
import Dashboard from "./components/Dashboard";
import Editor from "./components/Editor";
import Login from "./components/Login";
import Signup from './components/Signup'
import { AuthContextProvider } from "./context/AuthContext";
import ProtectedRoute from './components/ProtectedRoute'
import Home from "./components/Home";
import { createContext, useState } from 'react';
import ReactSwitch from 'react-switch';

export const ThemeContext = createContext(null)

function App() {
  const [theme, setTheme] = useState("light")

  const toggleTheme= () => {
    setTheme((curr) => (curr === "light" ? "dark" :  "light"))
  }
  return (
    <ThemeContext.Provider value = {{theme, toggleTheme}} >
      <div className="switch">
          <label> {theme === "light" ? "Light Mode" : "Dark Mode"}</label>
          <ReactSwitch onChange={toggleTheme} checked={theme === "dark"} />
  </div>
      <div id = {theme} className= "App">
      
        <AuthContextProvider>
        <Routes>
          
          <Route path = '/home' element = {<ProtectedRoute><Home/> </ProtectedRoute>}/>
          <Route path = '/editor' element = {<ProtectedRoute><Editor/> </ProtectedRoute>}/>
          <Route path = '/' element = {<Login/>} toggleTheme= {toggleTheme} theme = {theme}/>
          <Route path = '/signup' element = {<Signup/>}/>
        
        </Routes>
        
        </AuthContextProvider>
        
      </div>
      
      
    </ThemeContext.Provider>
  );
}

export default App;

/* 
<Route path="/" element = { <Home/> }/>
        <Route path="/dashboard" element = { <Dashboard/> }/>
        <Route path="/editor/:id" element = { <Editor/> }/>
        */