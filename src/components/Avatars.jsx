import React from 'react';
import Avatar1 from '../static/images/avatar_set/Asset 5.svg';
import Avatar2 from '../static/images/avatar_set/Asset 6.svg';
import Avatar3 from '../static/images/avatar_set/Asset 7.svg';
import Avatar4 from '../static/images/avatar_set/Asset 9.svg';
import Avatar5 from '../static/images/avatar_set/Asset 10.svg';
import Avatar6 from '../static/images/avatar_set/Asset 11.svg';
import Avatar7 from '../static/images/avatar_set/Asset 12.svg';
import Avatar8 from '../static/images/avatar_set/Asset 13.svg';

const Avatars = (props) => {
    
    const avatars = [
        {
            avatar: Avatar1,
            avatarName: 'Avatar 1',
            avatarAlt: 'Avatar Photo'
        },
        {
            avatar: Avatar2,
            avatarName: 'Avatar 2',
            avatarAlt: 'Avatar Photo'
        },
        {
            avatar: Avatar3,
            avatarName: 'Avatar 3',
            avatarAlt: 'Avatar Photo'
        },
        {
            avatar: Avatar4,
            avatarName: 'Avatar 4',
            avatarAlt: 'Avatar Photo'
        },
        {
            avatar: Avatar5,
            avatarName: 'Avatar 5',
            avatarAlt: 'Avatar Photo'
        },
        {
            avatar: Avatar6,
            avatarName: 'Avatar 6',
            avatarAlt: 'Avatar Photo'
        },
        {
            avatar: Avatar7,
            avatarName: 'Avatar 7',
            avatarAlt: 'Avatar Photo'
        },
        {
            avatar: Avatar8,
            avatarName: 'Avatar 8',
            avatarAlt: 'Avatar Photo'
        }
    ];

    const avatar = avatars.map(avatar => {
        return (
            <div className="col col-lg-3 mt-3">
                <div className='d-flex flex-column align-items-center justify-content-center'>
                    <img height={100} src={avatar.avatar} alt={avatar.avatarAlt} />
                    <div className='avatar-name th-bg-main text-white px-3 py-2 rounded-3 text-center'>{avatar.avatarName}</div>
                </div>
            </div>
        );
    });

  return (
    <>
        {avatar}
    </>
  )
}

export default Avatars;
