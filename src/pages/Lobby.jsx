import React from 'react'

import '../static/css/lobby.css';
import unknown1 from '../static/images/avatar_set/Asset 5.svg';
import unknown2 from '../static/images/avatar_set/Asset 6.svg';
import ProbeHeader from '../components/ProbeHeader';
import Avatars from '../components/Avatars';


const Lobby = () => {
  return (
    <>  
        <ProbeHeader/>
        <div className='container d-flex flex-row justify-content-center mt-5'>
            <div className='d-flex flex-column align-items-center justify-content-center'>
                <div className='border player-container p-3 rounded-3'>
                    <h3 className='w-100 text-end'>Players : 0 / 8</h3>
                    <div className='player-list p-3 d-flex align-items-center justify-content-center mt-5'>
                        <div className="row">
                            <Avatars/>
                        </div>
                    </div>
                </div>
                <button className='btn th-bg-main w-25 text-center text-white fs-3 fw-bold mt-3'><i class="bi bi-play-fill me-2"></i>Start</button>
            </div>
            <div className='d-flex flex-column ms-4'>
                <div className="chatbox-container border border-4 rounded-3" style={{height: '89%'}}>
                    <div className="message-box border p-3" style={{height: '85%'}} >
                        {/* Sample UI for Messages */}
                        <div className="player1 d-flex align-items-center my-2">
                            <img src={unknown1} height={50} alt="Player1"/>
                            <div className='ms-2'>
                                <p className="m-0" style={{fontSize: '12px'}}>Ciel Palacio</p>
                                <p className='fw-bold m-0'>Kamusta Project niyo guys?</p>
                                <p className='m-0'style={{fontSize: '10px'}}>Sent 2 minutes ago</p>
                            </div>
                        </div>
                        {/* Sample UI for self reply */}
                        <div className="player1 d-flex flex-row-reverse align-items-center my-2">
                            <img src={unknown2} height={50} alt="Player1"/>
                            <div className='me-2'>
                                <p className="m-0 text-end" style={{fontSize: '12px'}}>You</p>
                                <p className='fw-bold m-0'>Ayos naman po kamahalan</p>
                                <p className='m-0 text-end'style={{fontSize: '10px'}}>Sent 1 minute ago</p>
                            </div>
                        </div>
                    </div>
                    <div className="message-container d-flex flex-row th-bg-main p-3">
                        <input type="text" placeholder='Enter Message' className='form-control' />
                        <button className='btn btn-light ms-2 ' type='submit'>Send</button>
                    </div>
                </div>
                <button type='submit' className='btn th-bg-main text-center text-white fs-3 fw-bold rounded-3 mt-3 w-100'>
                    <img width="35" height="35" src="https://img.icons8.com/fluency-systems-regular/48/FFFFFF/clone-figure--v3.png" alt="clone-figure--v3" className='me-2'/>
                    Room Code
                </button>
            </div>
        </div>
    </>
  )
}

export default Lobby;