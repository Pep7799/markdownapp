import React, {useState} from "react";
import { Form, Button, Alert } from 'react-bootstrap'
import GoogleButton from "react-google-button";
import { ImSwitch } from "react-icons/im";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";
import ReactSwitch from 'react-switch';



const Login = ({toggleTheme, theme}) => {

   

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState("")
    const navigate = useNavigate()
    const { logIn, googleSignIn } = UserAuth();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError ("");
        try {
            await logIn (email, password);
            navigate("/home")

        } catch (e) {
           setError(e.message)
        }
    };

    const handleGoogleSignIn = async(e) => {
        e.preventDefault()

        try {
            await googleSignIn()
            navigate("/home")
        } catch (e) {
            setError(e.message)
        }
    }
  return (
    <section className="container">
       
        <div className="intro">
            <h2>Markdown 2.0</h2>
            <h4>Markdown 2.0 helps you as a technical writer <br/> get closer to your writings <br />Practice your skills as a creator.
               <br /> Other features coming up 🎁 </h4>
            <a href="https://pep.vercel.app/" target="_blank"> <button className="intro-btn">  Click to connect with me and my writings</button></a>
        </div>

        
        <div className="log-in">
            
                {error && <Alert variant="danger">{error}</Alert>}
            <form onSubmit = {handleSubmit} className = 'input-form'>
                
                    <input
                        type="email"
                        placeholder="Email address"
                        className="email"
                        onChange={(e) => setEmail(e.target.value)}
                        
                    />
                
                    <br />
                
                    <input
                        type="password"
                        placeholder="Password"
                        className="password"
                        onChange={(e) => setPassword(e.target.value)}
                        
                    />
              

                <div>
                    <button className="btn-in" variant="primary" type="Submit">
                    Log In
                    </button>
                </div>
            </form>
                
                <div>
                    <GoogleButton
                        type="dark"
                        className="google-btn"
                        onClick={handleGoogleSignIn}                        
                    />
                </div>
                <div className="link1">
                Don't have an account? <Link to = '/signup'> Sign up</Link>
            </div>          
       
        </div>
        
    
    </section>
  )
}

export default Login