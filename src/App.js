import {Routes, Route} from 'react-router-dom'
import Dashboard from "./components/Dashboard";
import Editor from "./components/Editor";
import Login from "./components/Login";
import Signup from './components/Signup'
import { AuthContextProvider } from "./context/AuthContext";
import ProtectedRoute from './components/ProtectedRoute'
import Home from "./components/Home";
import { createContext, useState } from 'react';
import Switch from 'react-switch';

export const ThemeContext = createContext(null)

function App() {
  const [theme, setTheme] = useState("light")

  const toggleTheme= () => {
    setTheme((curr) => (curr === "light" ? "dark" :  "light"))
  }
  return (
    <ThemeContext.Provider value = {{theme, toggleTheme}} >
      <div className="switch-container">
         {/* <label> {theme === "light" ? "Light Mode" : "Dark Mode"}</label> */}
          <Switch
            checked={theme === "dark"}
            onChange={toggleTheme}
            onColor="#86d3ff"
            onHandleColor="#2693e6"
            handleDiameter={10}
            uncheckedIcon={false}
            checkedIcon={false}
            boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
            activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
            height={20}
            width={28}
          />
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