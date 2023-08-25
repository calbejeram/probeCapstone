import {useState, useEffect, React} from 'react';
import io from 'socket.io-client';

import unknown1 from '../static/images/avatar_set/Asset 5.svg';
import unknown2 from '../static/images/avatar_set/Asset 6.svg';
import ProbeHeader from '../components/ProbeHeader';
import avatars from '../instance/AvatarData';

import '../static/css/lobby.css';
import '../static/css/avatar-select.css';


const Lobby = () => {
    const socket = io('http://localhost:5000')

    const [select_avatar,setShowAvatars] = useState(true)
    const [room_info,setRoomInfo] = useState([])

    let player_avatar = null;

    
    const selectAvatar = (e) =>{
        const avatar_choices = document.querySelectorAll('.avatar-choice');
        avatar_choices.forEach(choice => {
            if (choice.id === e.target.id){
                player_avatar = e.target.id;
                choice.classList.add('selected-character');
            }else{
                choice.classList.remove('selected-character');
            }
        })
    }
    
    const joinRoom = (e) =>{
        let user_data = JSON.parse(sessionStorage.getItem('user'))
        user_data.avatar = player_avatar
        socket.emit('join', user_data)
    }
    
    useEffect(()=>{
        socket.on('getRoomInfo', data =>{
            setShowAvatars(false);
            console.log(data);
            setRoomInfo(data);
        })

    })

return (
    <>  
        <ProbeHeader/>
        {
            select_avatar ? 

            <div className="d-flex align-items-center justify-content-center">
                <div className="create-container d-flex align-items-center justify-content-center">
                    <div className='d-flex flex-column align-items-center justify-content-center'>
                        <h1>Choose Character</h1>
                        <div className="row mt-5">
                            {
                                avatars.map((avatar,index) => {
                                    return(                             
                                        <div role='button' onClick={selectAvatar} className=' col col-lg-3 m-0 p-0 d-flex justify-content-center mt-2'>
                                            <img id={index} className='avatar-choice rounded-circle p-1' width={100} height={100} src={avatar} alt="Avatar Photo" />
                                        </div>
                                    )
                            
                                })
                            }
                        </div>
                        <div role='button' onClick={joinRoom} className="text-white th-bg-main px-3 py-2 text-center rounded-3 mt-5">Enter Room</div>
                    </div>
                </div>
            </div> 
            :
            <div className='container d-flex flex-row justify-content-center mt-5'>
                <div className='d-flex flex-column align-items-center justify-content-center'>
                    <div className='border player-container p-3 rounded-3'>
                        <h3 className='w-100 text-end'>Players : 0 / 8</h3>
                        <div className='player-list p-3 d-flex align-items-center justify-content-center mt-5'>
                            <div className="row">
                               {
                                    room_info.players.map((player,index)=>{
                                        return(
                                            <div className="col col-lg-3 mt-3">
                                                <div className='d-flex flex-column align-items-center justify-content-center'>
                                                    <img height={100} src={avatars[room_info.avatars[Number(index)]]} alt="avatar-img" />
                                                    <div className='avatar-name th-bg-main text-white px-3 py-2 rounded-3 text-center'>{player}</div>
                                                </div>
                                            </div>
                                        )
                                        })
                               }
                            </div>
                        </div>
                    </div>
                    <button className='btn th-bg-main w-25 text-center text-white fs-3 fw-bold mt-3'><i className="bi bi-play-fill me-2"></i>Start</button>
                </div>
                <div className='d-flex flex-column ms-4'>
                    <div className="chatbox-container rounded-3">
                        <div className="message-box border p-3">
                            {/* Sample UI for Messages */}
                            <div className="player1 d-flex align-items-center my-2">
                                <img src={unknown1} height={50} alt="Player1"/>
                                <div className='ms-2'>
                                    <p className="username m-0">Ciel Palacio</p>
                                    <p className='fw-bold m-0'>Kamusta Project niyo guys?</p>
                                    <p className='time m-0'>Sent 2 minutes ago</p>
                                </div>
                            </div>
                            {/* Sample UI for self reply */}
                            <div className="player1 d-flex flex-row-reverse align-items-center my-2">
                                <img src={unknown2} height={50} alt="Player1"/>
                                <div className='me-2'>
                                    <p className="username m-0 text-end">You</p>
                                    <p className='fw-bold m-0'>Ayos naman po kamahalan</p>
                                    <p className='time m-0 text-end'>Sent 1 minute ago</p>
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
        }


    </>
  )
}

export default Lobby;