import {React,useEffect,useState} from 'react';
import '../static/css/leader.css';
import logo from '../static/images/logo-main.png';

import io from 'socket.io-client';
const socket = io('http://localhost:5000')

const Leaderboard = () => {

    const [scoreboard, setScoreBoard] = useState([]);

    let user_data = JSON.parse(sessionStorage.getItem('user'))
    socket.emit('requestScores', {code: user_data.code})


    const goBack = () =>{
        window.location = window.origin + "/";
    }

    useEffect(()=>{
        socket.on('initScores', data=>{
            console.log(data);
            data.players.sort(function(a, b){return b - a});
            setScoreBoard(data)
        })
    })

  return (
    <>
        <div className='container-fluid th-bg-main d-flex justify-content-center p-3'>
            <img height={100} src={logo} alt="" />
        </div>
        <div className='leader-head d-flex flex-row-reverse bd-highlight m-2 '>
            
        </div>
        <div className='leader-back'>
            <div className='container-fluid w-100 d-flex flex-column justify-content-between row-gap-5 align-items-center'>
                <table className='leader-table table table-hover table-white'>
                    <thead className='header-text'>
                        <tr>
                            <th className='head text-primary bg-danger'>Rank</th>
                            <th className='head text-primary bg-danger'>UserName</th>
                            <th className='head text-primary bg-danger'>Points</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            scoreboard.players ?

                            scoreboard.players.map((player,index) =>{
                                return(
                                    <tr>
                                        <td> Rank {index+1}</td>
                                        <td>{player.name}</td>
                                        <td>{player.score}</td>
                                    </tr>
                                )
                            })
                            :
                            false
                        }

                    </tbody>
                </table>
                <div onClick={goBack} role='button' className='bg-light w-25 text-center fs-3 rounded-3'>
                    Go Back
                </div>
            </div>
        </div>
        
    </>
  )
}

export default Leaderboard