import React from 'react';
import '../static/css/avatar-select.css';
import ProbeHeader from '../components/ProbeHeader';
import Avatar1 from '../static/images/avatar_set/Asset 5.svg';
import Avatar2 from '../static/images/avatar_set/Asset 6.svg';
import Avatar3 from '../static/images/avatar_set/Asset 7.svg';
import Avatar4 from '../static/images/avatar_set/Asset 9.svg';
import Avatar5 from '../static/images/avatar_set/Asset 10.svg';
import Avatar6 from '../static/images/avatar_set/Asset 11.svg';
import Avatar7 from '../static/images/avatar_set/Asset 12.svg';
import Avatar8 from '../static/images/avatar_set/Asset 13.svg';

const CreateAvatar = () => {
    const avatars = [
        Avatar1,
        Avatar2,
        Avatar3,
        Avatar4,
        Avatar5,
        Avatar6,
        Avatar7,
        Avatar8,
    ];

    const avatarSelect = avatars.map(avatar => {
        return (
            <div role='button' className='col col-lg-3 m-0 p-0 d-flex justify-content-center'>
                <img width={80} src={avatar} alt="Avatar Photo" />
            </div>
        )
    })
  return (
    <>
        <div>
            <ProbeHeader/>
            <div className="d-flex align-items-center justify-content-center">
                <div className="create-container d-flex align-items-center justify-content-center">
                    <form action="" method='' className='d-flex flex-column align-items-center justify-content-center'>
                        <input type="text" className="create-name w-50 mb-5" name='name' id='name' placeholder='Enter Name' />
                        <div className="row">
                            {avatarSelect}
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </>
  )
}

export default CreateAvatar;
