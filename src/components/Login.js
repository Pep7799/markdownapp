import React, {useState} from "react";
import { Form, Button, Alert } from 'react-bootstrap'
import GoogleButton from "react-google-button";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";


const Login = () => {

   

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
        <div>
            <h3>Want to start writing. 
                <br /> Kindly Log in</h3>
                {error && <Alert variant="danger">{error}</Alert>}
            <form onSubmit = {handleSubmit}>
                
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
                    <Button className="btn-in" variant="primary" type="Submit">
                    Log In
                    </Button>
                </div>
            </form>
                
                <div>
                    <GoogleButton
                        type="dark"
                        className="google-btn"
                        onClick={handleGoogleSignIn}                        
                    />
                </div>
        </div>
            <div className="link1">
                Don't have an account? <Link to = '/signup'> Sign up</Link>
            </div>          
       
    </section>
  )
}

export default Login