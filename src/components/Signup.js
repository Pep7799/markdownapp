import React, {useState} from "react";
import { Alert } from 'react-bootstrap'
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";




const Signup = () => {

    const { signUp } = UserAuth();

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState("")
    const navigate = useNavigate()
    

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError ("");
        try {
            await signUp(email, password);
            navigate("/")

        } catch (e) {
           setError(e.message)
        }
    };
  return (
    <section className="signup-container">
        <div>
            <h2>Don't have an account?
                <br /> Sign up</h2>
                {error && <Alert variant="danger">{error}</Alert>}
            <form onSubmit={handleSubmit}>

                              
                    <input
                        type="email"
                        placeholder="Email address"
                        className = 'email'
                        onChange={(e) => setEmail(e.target.value)}
                        
                    />
                

                <br />
                    <input
                        type="password"
                        placeholder="Password"
                        className="password"
                        onChange={(e) => setPassword (e.target.value) }
                        
                    />
               

                <div>
                    <button variant="primary" type="Submit" className="btn-in" >
                        Sign up
                    </button>
                </div>
                </form>
                <div className="link">
                Already have an account?<Link to = '/'> Log In</Link>
            </div>  
              
                
            </div>
                    
       
    </section>
  )
}

export default Signup