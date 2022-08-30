import {Routes, Route} from 'react-router-dom'
import Dashboard from "./components/Dashboard";
import Editor from "./components/Editor";
import Login from "./components/Login";
import Signup from './components/Signup'
import { AuthContextProvider } from "./context/AuthContext";
import ProtectedRoute from './components/ProtectedRoute'
import Home from "./components/Home";

function App() {
  return (
    <div>
      <AuthContextProvider>
      <Routes>
        <Route path = '/home' element = {<ProtectedRoute><Home/> </ProtectedRoute>}/>
        <Route path = '/editor' element = {<ProtectedRoute><Editor/> </ProtectedRoute>}/>
        <Route path = '/' element = {<Login/>}/>
        <Route path = '/signup' element = {<Signup/>}/>
      
      </Routes>
      </AuthContextProvider>
    </div>
  );
}

export default App;

/* 
<Route path="/" element = { <Home/> }/>
        <Route path="/dashboard" element = { <Dashboard/> }/>
        <Route path="/editor/:id" element = { <Editor/> }/>
        */