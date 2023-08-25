import React from 'react';
import '../static/css/leader.css';
import logo from '../static/images/logo-main.png';



const Leaderboard = () => {
  return (
    <>
        <div className='container-fluid th-bg-main d-flex justify-content-center p-3'>
            <img height={100} src={logo} alt="" />
        </div>
        <div className='leader-head d-flex flex-row-reverse bd-highlight m-2 '>
            
        </div>
        <div className='leader-back'>
            <div className='container-fluid w-100'>
                <table className='leader-table table table-hover table-white'>
                    <thead className='header-text'>
                        <tr>
                            <th className='head text-primary bg-danger'>Rank</th>
                            <th className='head text-primary bg-danger'>UserName</th>
                            <th className='head text-primary bg-danger'>Points</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className='rank-1'>
                            <td> Rank 1</td>
                            <td>Tank Man</td>
                            <td>950</td>
                        </tr>
                        <tr className='rank-2'>
                            <td> Rank 2 </td>
                            <td>Kapitan Americano</td>
                            <td>900</td>
                        </tr>
                        <tr className='rank-3'>
                            <td> Rank 3</td>
                            <td>Harry Istilo</td>
                            <td>750</td>
                        </tr>
                        <tr>
                            <td>Rank 4</td>
                            <td>Corn Syrup</td>
                            <td>689</td>
                        </tr>
                        <tr>
                            <td>Rank 5</td>
                            <td>Coonut Mile</td>
                            <td>567</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
        
    </>
  )
}

export default Leaderboard