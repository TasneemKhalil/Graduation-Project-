import React from 'react';
import userimg from '../assets/user.jpg';
import Image from 'react-bootstrap/Image';

const users = [
  {
    name: 'asma2',
    message: 'when will be the due to the demo for graduation project this semester?',
  },
  {
    name: 'tasbeeh',
    message: 'hey',
  },
  {
    name: 'aya',
    message: 'I need help',
  },
  {
    name: 'asma',
    message: 'i need help with Java',
  },
];

function Chats() {
  return (
    <div className='chats'>
      {users.map((user, index) => (
        <div className="userChat" key={index}>
          <Image className='image' src={userimg} alt="" />
          <div className="userChatInfo">
            <span>{user.name}</span>
            <p>{user.message}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Chats;
