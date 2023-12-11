import React ,{useContext} from 'react';
import "../App.css";
import userimg from '../assets/user.jpg';
import Image from 'react-bootstrap/Image';
import { AuthContext} from "../contexts/AuthContext";

function Navbar() {
  const { currentUser } = useContext(AuthContext);
  return (
    <div className='navbar'>
      <span className="logo">Messages</span>
      <div className="user">
        <Image className='img' src={userimg} alt="" />
        <span className="username">Expert</span>
      </div>
    </div>
  );
}

export default Navbar;
