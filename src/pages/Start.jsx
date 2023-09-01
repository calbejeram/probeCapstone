import React from 'react'
import { Link } from 'react-router-dom'

const Start = () => {
  return (
    <>
        <div className='container d-flex align-items-center justify-content-center' style={{ height: '100vh'}}>
            <Link to="/game" style={{ backgroundColor: '#284265', padding: '30px 40px', fontSize: '5rem', textDecoration: 'none', borderRadius: '20px', color: 'white', fontWeight: 'bold'}}><i class="bi bi-play-fill"></i>Play</Link>
        </div>
    </>
  )
}

export default Start
