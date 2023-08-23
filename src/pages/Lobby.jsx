import React from 'react'

import '../static/css/lobby.css';
import logo from '../static/images/logo-main.png'
import unknown from '../static/images/avatar_set/Asset 5.svg'


const Lobby = () => {
  return (
    <>  
        <div className='container-fluid th-bg-main d-flex justify-content-center p-3'>
            <img height={100} src={logo} alt="" />
        </div>
        <div className='container d-flex flex-row justify-content-center mt-5'>
            <div className='d-flex flex-column justify-content-center'>
                <div className='border player-container p-3 rounded-3'>
                    <h3 className='w-100 text-end'>Players : 0 / 8</h3>
                    <div className='player-list mt-5'>
                        <div className='avatar-container d-flex flex-column justify-content-end'>
                            <img height={300} src={unknown} alt="" />
                            <div className='avatar-name th-bg-main text-white px-3 py-2 rounded-3 text-center'>unknown</div>
                        </div>
                    </div>
                </div>
                <div role='button' className='px-5 th-bg-main w-25 text-center text-white fs-3 rounded-3'>Start</div>
            </div>
        </div>
    </>
  )
}

export default Lobby