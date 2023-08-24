import React from 'react';
import LogoSingle from '../static/images/logo-single.png';
import '../static/css/user-dashboard.css';

const UserDashboard = () => {
  return (
    <>
        <div>
            <div className='container-fluid th-bg-main d-flex justify-content-end p-3 position-fixed'>
                <button className='btn btn-light d-flex align-items-center'>
                    Enter Code
                    <i className="code-arrow bi bi-arrow-right-short"></i>
                </button>
            </div>
            <div className='sidebar w-25 bg-light px-3'>
                <div >
                    <div className="logo-container d-flex align-items-center justify-content-center">
                        <img height={100} src={LogoSingle} alt="" />
                        <h1 className='fw-bold display-4'>Probe</h1>
                    </div>
                    <div className="user-container d-flex align-items-center justify-content-center th-bg-main text-white rounded-4">
                        <i class="user-icon bi bi-person-circle"></i>
                        <h3 className='dashboard-username fw-bold ms-3 m-0'>Jeram Calbe</h3>
                    </div>
                    <div className='nav-list mt-5'>
                        <ul className='d-flex flex-column'>
                            <li className='nav nav-item'>
                                <a href="" className='nav-link d-flex align-items-center fs-4'><i class="menu-list-icon bi bi-bookmark-plus me-2"></i>My Quizzes</a>
                            </li>
                            <li className='nav nav-item'>
                                <a href="" className='nav-link d-flex align-items-center fs-4'><i class="menu-list-icon bi bi-card-checklist me-2"></i>Reports</a>
                            </li>
                            <li className='nav nav-item'>
                                <a href="" className='nav-link d-flex align-items-center fs-4'><i class="menu-list-icon bi bi-gear me-2"></i>Settings</a>
                            </li>
                            <li className='nav nav-item'>
                                <a href="" className='nav-link d-flex align-items-center fs-4'><i class="menu-list-icon bi bi-arrow-down-short me-2"></i>More</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="main-container d-flex align-items-center justify-content-center" style={{height: '100vh'}}>
                <div className="quizzes-container d-flex flex-column">
                    <div className="d-flex align-items-start justify-content-start">
                        <div className="new-quizzes d-flex p-1">
                            <button className='btn th-bg-main text-white'>
                                <i class="bi bi-plus-lg"></i>
                            </button>
                            <h4 className='m-0 th-bg-main px-3 py-1 text-white rounded-3 ms-2'>New Quiz</h4>
                        </div>
                    </div>
                    <div className="recent-quizzes">
                        {/* This is just a dummy content since I still have no idea what are the content for each box */}
                        {/* You can change it anytime soon */}
                        <div className="row">
                            <div className="quizzes-box col-4">
                                box1
                            </div>
                            <div className="quizzes-box col-4">
                                box1
                            </div>
                            <div className="quizzes-box col-4">
                                box1
                            </div>
                        </div>
                        <div className="row">
                            <div className="quizzes-box col-4">
                                box1
                            </div>
                            <div className="quizzes-box col-4">
                                box1
                            </div>
                            <div className="quizzes-box col-4">
                                box1
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
