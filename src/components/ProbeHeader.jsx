import React from 'react';
import logo from '../static/images/logo-main.png';

const ProbeHeader = () => {
  return (
    <>
        <div className='container-fluid th-bg-main d-flex justify-content-center p-3'>
            <img height={100} src={logo} alt="Probe Logo" />
        </div>
    </>
  )
}

export default ProbeHeader;
