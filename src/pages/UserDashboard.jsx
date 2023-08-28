import {React, useEffect, useState} from 'react';
import io from 'socket.io-client';

import LogoSingle from '../static/images/logo-single.png';
import '../static/css/user-dashboard.css';

const socket = io('http://localhost:5000');

const UserDashboard = () => {
    sessionStorage.clear();
    let player_name = null

    const createRoom = () =>{
        let name_value = document.querySelector('.dashboard-username');
        player_name = name_value.innerText;
    
        socket.emit('host', {value: player_name})
    };

    const joinRoom = () =>{
        let name_value = document.querySelector('.dashboard-username').innerText;
        let join_code = document.querySelector('.join-code').value;
    
        sessionStorage.setItem('user', JSON.stringify({code: join_code, name: name_value}))
        window.location = window.origin + "/lobby"
    };

    useEffect(()=>{

        socket.on('initRoom', data =>{
            sessionStorage.setItem('user', JSON.stringify({code: data, name: player_name}))
            window.location = window.origin + "/lobby"
        });

    },[]);

  return (
    <>
        <div className='d-flex flex-row justify-content-between'>
            <div className='sidebar w-25 bg-light px-3'>
                <div >
                    <div className="logo-container d-flex align-items-center justify-content-center py-5">
                        <img height={100} src={LogoSingle} alt="" />
                        <h1 className='side-title fw-medium'>Probe</h1>
                    </div>
                    <div className="user-container d-flex align-items-center justify-content-center th-bg-main text-white rounded-3">
                        <i className="user-icon bi bi-person-circle"></i>
                        <h3 className='dashboard-username fw-bold ms-3 m-0'>Joseph Naval</h3>
                    </div>
                    <div className='nav-list mt-5'>
                        <ul className='d-flex flex-column'>
                            <li className='nav nav-item'>
                                <a href="" className='nav-link d-flex align-items-center fs-4'><i className="menu-list-icon bi bi-bookmark-plus me-2"></i>My Quizzes</a>
                            </li>
                            <li className='nav nav-item'>
                                <a href="" className='nav-link d-flex align-items-center fs-4'><i className="menu-list-icon bi bi-card-checklist me-2"></i>Reports</a>
                            </li>
                            <li className='nav nav-item'>
                                <a href="" className='nav-link d-flex align-items-center fs-4'><i className="menu-list-icon bi bi-gear me-2"></i>Settings</a>
                            </li>
                            <li className='nav nav-item'>
                                <a href="" className='nav-link d-flex align-items-center fs-4'><i className="menu-list-icon bi bi-arrow-down-short me-2"></i>More</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="container d-flex flex-column align-items-center justify-content-start border p-0">
                <div className="container th-bg-main d-flex flex-row justify-content-end column-gap-3 p-3">
                    <input type="text" className='join-code form-control w-25' placeholder='Enter Code'/>
                    <button onClick={joinRoom} className='btn btn-light d-flex align-items-center'>
                        <i className="code-arrow bi bi-arrow-right-short"></i>
                    </button>
                </div>
                <div className="quizzes-container d-flex flex-column mt-5">
                    <div className="d-flex align-items-start justify-content-start">
                        <div className="new-quizzes d-flex p-1">
                            <button className='btn th-bg-main text-white'>
                                <i className="bi bi-plus-lg"></i>
                            </button>
                            <h4 className='m-0 th-bg-main px-3 py-1 text-white rounded-3 ms-2'>New Quiz</h4>
                        </div>
                    </div>
                    <div className="recent-quizzes">
                        <div className="border card w-25 mt-5 p-0">
                            <img src="https://img.freepik.com/free-vector/hand-drawn-web-developers_23-2148819604.jpg?w=996&t=st=1692953226~exp=1692953826~hmac=6c964fd820b0a896379598dcfe5d0ce615aaae65a6a044226e1e4836699ce260" className="card-img-top" alt="..."/>
                            <div className="card-body">
                                <h5 className="card-title fw-medium">Javascript quiz</h5>
                                <p className="card-text">all about javascript and its fundamentals</p>
                                <div role='button' onClick={createRoom} className="text-white th-bg-main px-3 py-2 text-center rounded-3">Create Room</div>
                            </div>
                        </div>   
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default UserDashboard;
