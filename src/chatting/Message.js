import React from 'react';
import '../App.css';
import userimg from '../assets/user.jpg';
import { auth } from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";



const Message = ({ message }) =>  {
  const [user] = useAuthState(auth);
  return (
    <div className='messageContinar'>
      <div className={`message ${message.uid === user.uid ? "right" : ""}`}>
        {/* <div className='messageInfo'>
          <img className='img1' 
           src={message.avatar}
           alt="user avatar" />
        </div> */}
        <div className='messageContent'>
        {/* <p className="p">{message.name}</p> */}
        <p className="p">{message.text}</p>
        </div>
      </div>

     
    </div>
  );
}

export default Message;
