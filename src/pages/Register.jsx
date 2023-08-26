import React from 'react';
import '../static/css/register.css'
import ProbeHeader from '../components/ProbeHeader';

const Register = () => {

    const joinRoom = () =>{
        let name_value = document.querySelector('.guest-name').value;
        let join_code = document.querySelector('.guest-code').value;
    
        sessionStorage.setItem('user', JSON.stringify({code: join_code, name: name_value}))
        window.location = window.origin + "/lobby"
    };


  return (
    <>
        <div>
            <ProbeHeader/>
            <div className='register-form d-flex align-items-center justify-content-center'>
                <div>
                    <fieldset className='d-flex flex-column align-items-center justify-content-center'>
                        <input className='register-input guest-name mb-4 text-white ' type="text" name='name' id='name' placeholder='Enter Name' />
                        <input className='register-input guest-code mb-4 text-white' type="text" name='room-code' id='room-code' placeholder='Room Code' />
                        <button onClick={joinRoom} className='btn th-bg-main text-white p-2 fw-bold fs-5 w-50'>Enter Room</button>
                    </fieldset>
                </div>
            </div>
        </div>
    </>
  )
}

export default Register;
