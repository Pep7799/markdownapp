import React from 'react'
import { Link } from 'react-router-dom'

const Dashboard = () => {
  return (
    <div className='app'>
        <h3>Here is your dashboard</h3>
        
        <Link to = '/editor/:id'><button>New</button></Link>

    </div>
  )
}

export default Dashboard