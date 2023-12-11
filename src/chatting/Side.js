import React from 'react'
import '../App.css'
import Navbar from './Navbar'
import Search from './Search'
import Chats from './Chats'

function Side() {
  return (
    <div className='sidebar'>
      <Navbar/>
      <Search/>
      <Chats/>
      </div>
  )
}

export default Side