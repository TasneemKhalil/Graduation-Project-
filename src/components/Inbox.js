import React from 'react'
import Header from './Header';
import { MDBRow, MDBCol } from 'mdbreact';
import SideBarExpert from './SideBarExpert';
import Side from '../chatting/Side';
import Chat from '../chatting/Chat';
import '../App.css'


function Inbox() {
  return (
    <>
    <SideBarExpert/>
    <Header/>
    <div className="inbox">
      <div className="container1">
        <Side/>
        <Chat/>
      </div>
    </div>
</>
  )
}

export default Inbox