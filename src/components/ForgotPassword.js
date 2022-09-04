import React, { useRef, useState } from "react"
import { Alert } from "react-bootstrap"
import { UserAuth } from "../context/AuthContext"
import { Link } from "react-router-dom"

export default function ForgotPassword() {
  const emailRef = useRef()
  const { resetPassword } = UserAuth()
  const [error, setError] = useState("")
  const [message, setMessage] = useState("")

  async function handleSubmit(e) {
    e.preventDefault()

    try {
      setMessage("")
      setError("")
      await resetPassword(emailRef.current.value)
      setMessage("Check your inbox or spam for further instructions")
    } catch {
      setError("Failed to reset password")
    }

  }

  return (
    
      <section className="password-container">
        <div>
          <h2 className="password-text">Password Reset</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          {message && <Alert variant="success">{message}</Alert>}
          <form onSubmit={handleSubmit}>
          
              <input className = 'email-two' type="email" ref={emailRef} placeholder= 'Email' autoFocus required />
              <br />
           
            <button className="btn-in-password" type="submit">
              Reset Password
            </button>
          </form>
          <div className="">
           Have an account? <Link to="/">Login</Link>
          </div>
          <div className="account-link">
            Need an account? <Link to="/signup">Sign Up</Link>
          </div>
        </div>
      
      
      </section>
  )
}