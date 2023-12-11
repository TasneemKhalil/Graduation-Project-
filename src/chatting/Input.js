
import '../App.css'
import React, { useState } from "react";
import { auth, db } from "../firebase";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";

function Input()  {
  const [message, setMessage] = useState("");

  const sendMessage = async (event) => {
    event.preventDefault();
    if (message.trim() === "") {
      alert("Enter valid message");
      return;
    }
    const { uid, displayName, photoURL } = auth.currentUser;
    await addDoc(collection(db, "chats"), {
      text: message,
      name: displayName,
      avatar: photoURL,
      createdAt: serverTimestamp(),
      uid,
      to:'asmajehad919@gmail.com'
    });
    setMessage("");
   

  };
  return (
    <form onSubmit={(event) => sendMessage(event)} className="input">
    <label htmlFor="messageInput" hidden>
      Enter Message
    </label>
      <input 
       id="messageInput"
       name="messageInput"
       type="text"
       className="input"
       placeholder='Type a Message...'
       value={message}
       onChange={(e) => setMessage(e.target.value)}
       />
      <div  className='send'>
      <button  type="submit"  className='button'> Send </button>
      </div>
      
    </form>
    
  )
}

export default Input