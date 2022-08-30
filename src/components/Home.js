import React from 'react'
import {Button} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { UserAuth } from '../context/AuthContext'

const Home = () => {
  const {user, logOut} = UserAuth()
  console.log(user)

  const handleOut = async() => {
    try {
      await logOut()
    }
    catch (e) {
      console.log(e.message)
    }
  }
  return (
    <section>
    <div className='home'>
       Hello, welcome <br /> {user && user.email}
    </div>
    <br />
    <br />
    <div>
      <button className='btn-in1'><Link to = '/editor'>Create New</Link> </button>
    </div>
   
    </section>
  )
}

export default Home