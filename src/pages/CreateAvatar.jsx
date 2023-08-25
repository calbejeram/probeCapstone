// import React from 'react';
// import io from 'socket.io-client';
// import ProbeHeader from '../components/ProbeHeader';
// import avatars from '../instance/AvatarData';


// import '../static/css/avatar-select.css';

// const CreateAvatar = () => {
    
//     const socket = io('http://localhost:5000');
//     let player_avatar = null;

//     const selectAvatar = (e) =>{
//         const avatar_choices = document.querySelectorAll('.avatar-choice');
//         avatar_choices.forEach(choice => {
//             if (choice.id === e.target.id){
//                 player_avatar = e.target.id;
//                 choice.classList.add('selected-character');
//             }else{
//                 choice.classList.remove('selected-character');
//             }
//         })
//     }

//     const joinRoom = (e) =>{
//         let user_data = JSON.parse(sessionStorage.getItem('user'))
//         user_data.avatar = player_avatar
//         socket.emit('join', user_data)
//         window.location = window.origin = "/lobby"
//     }


//   return (
//         <div>
//             <ProbeHeader/>
//         </div>
//   )
// }

// export default CreateAvatar;
