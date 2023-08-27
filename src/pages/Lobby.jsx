import {useState, useEffect, React} from 'react';
import io from 'socket.io-client';

import unknown1 from '../static/images/avatar_set/Asset 5.svg';
import unknown2 from '../static/images/avatar_set/Asset 6.svg';
import ProbeHeader from '../components/ProbeHeader';
import avatars from '../instance/AvatarData';

import '../static/css/lobby.css';
import '../static/css/avatar-select.css';

const socket = io('http://localhost:5000')

const Lobby = () => {

    const [select_avatar,setShowAvatars] = useState(true)
    const [user_data,setUserData] = useState(JSON.parse(sessionStorage.getItem('user')))
    const [room_info,setRoomInfo] = useState([])
    const [player_count,setPlayerCount] = useState(0)
    const [isAdmin,setIsAdmin] = useState(false)
    const [room_message, setRoomMessage] = useState([])

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

    const sendMessage = () =>{
        let message = document.querySelector('.lobby-message');
        let date = new Date()
        socket.emit('lobbyMessage', {code: user_data.code, value: { name: user_data.name, avatar: Number(player_avatar), message: message, time: date.toLocaleString()}});
    };

    const startGame = () =>{
        socket.emit('initGame', {code: user_data.code});
    }

    const joinRoom = (e) =>{
        user_data.avatar = player_avatar
        socket.emit('join', user_data)
    }
    
    useEffect(()=>{
        socket.on('getRoomInfo', data =>{
            setShowAvatars(false);
            setRoomInfo(data);
            setPlayerCount(data.players.length);

            if(user_data.name === data.admin){
                setIsAdmin(true)
            }
        })

        socket.on('recieveRoomMessage', data =>{
            console.log(data)
            setRoomMessage(data)
        });

        socket.on('startGame', data =>{
            window.location = window.origin + '/game'
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
                        <h3 className='w-100 text-end'>Players : {player_count} / 8</h3>
                        <div className='player-list p-3 d-flex align-items-center justify-content-center mt-5'>
                            <div className="row">
                               {
                                    room_info.players.map((player,index)=>{
                                        return(
                                            <div className="col col-lg-3 mt-3">
                                                <div className='d-flex flex-column align-items-center justify-content-center'>
                                                    <img height={100} src={avatars[Number(player.avatar)]} alt="avatar-img" />
                                                    <div className='avatar-name th-bg-main text-white px-3 py-2 rounded-3 text-center'>{player.name.split(' ')[0]}</div>
                                                </div>
                                            </div>
                                        )
                                        })
                               }
                            </div>
                        </div>
                    </div>
                    {
                        isAdmin ?
                            <button onClick={startGame} className='btn th-bg-main w-25 text-center text-white fs-3 fw-bold mt-3'><i className="bi bi-play-fill me-2"></i>Start</button>
                        :
                            false
                    }
                </div>
                <div className='d-flex flex-column ms-4'>
                    <div className="card border text-center chatbox-container">
                        <div className="card-header th-bg-main text-white">
                            Messages
                        </div>
                        <div className="card-body message-box d-flex flex-column-reverse">
                            {
                                room_message.map(message =>{
                                    message.name === user_data.name ?

                                    <div className="player1 border d-flex flex-row-reverse align-items-center my-2">
                                     <img src={avatars[message.avatar]} height={50} alt="Player1"/>
                                     <div className='me-2'>
                                         <p className="username m-0 text-end">You</p>
                                         <p className='fw-bold m-0'>{message.message}</p>
                                         <p className='time m-0 text-end'>{message.date}</p>
                                     </div>
                                   </div>
                                    : 
                                    <div className="player1 d-flex align-items-center my-2">
                                        <img src={avatars[message.avatar]} height={50} alt="Player1"/>
                                        <div className='ms-2'>
                                            <p className="username m-0">{message.name}</p>
                                            <p className='fw-bold m-0'>{message.message}</p>
                                            <p className='time m-0'>{message.date}</p>
                                        </div>
                                    </div>

                                })
                            }
                        </div>
                        <div className="card-footer th-bg-main d-flex flex-row column-gap-3"> 
                            <input type="text" placeholder='Enter Message' className='lobby-message form-control'/>
                            <img role='button' onClick={sendMessage}  width="50" height="50" src="https://img.icons8.com/ios-glyphs/90/FFFFFF/sent.png" alt="sent"/>
                        </div>
                    </div>
                    {/* sendMessage */}
                    <button className='btn th-bg-main text-center text-white fs-3 fw-bold rounded-3 mt-3 w-100'>
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