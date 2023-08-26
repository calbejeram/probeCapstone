import React from 'react';
import '../static/css/register.css'
import ProbeHeader from '../components/ProbeHeader';

const Register = () => {
  return (
    <>
        <div>
            <ProbeHeader/>
            <div className='register-form d-flex align-items-center justify-content-center'>
                <form action="" method="">
                    <fieldset className='d-flex flex-column align-items-center justify-content-center'>
                        <input className='register-input mb-4 text-white ' type="text" name='name' id='name' placeholder='Enter Name' />
                        <input className='register-input mb-4 text-white' type="number" name='room-code' id='room-code' placeholder='Room Code' />
                        <button className='btn th-bg-main text-white p-2 fw-bold fs-5 w-50' type='submit'>Enter Room</button>
                    </fieldset>
                </form>
            </div>
        </div>
    </>
  )
}

export default Register;
