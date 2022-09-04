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
       Hi, welcome <br /> {user && user.email}
    </div>
    <br />
    <br />
    <div>
      <Link to = '/editor'><button className='btn-home'>Create New </button></Link>
    </div>
   
    </section>
  )
}

export default Home