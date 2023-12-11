import React from 'react'
import '../App.css'
import more from '../assets/more.png'
import Image from 'react-bootstrap/Image';
import Messages from './Messages'
import Input from './Input'


function Chat() {
  
  return (
    <div className="chat">
      <div className="chatInfo">
        <span>asma2</span>
        <div className="chatIcons">
          <Image className='imgChat' src={more} alt="" />
        </div>
      </div>
      <Messages />
      <Input/>
    </div>
  )
}

export default Chat