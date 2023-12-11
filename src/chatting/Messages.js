import React from 'react'
import '../App.css'
import more from '../assets/more.png'
import Image from 'react-bootstrap/Image';
import Message from './Message'
import Input from './Input'
import { useEffect, useRef, useState } from "react";
import {
  query,
  collection,
  orderBy,
  onSnapshot,
  limit,
  where
} from "firebase/firestore";
import { db,auth } from "../firebase";

export default function Messages() {
  const [messages, setMessages] = useState([]);
  
  
  useEffect(() => {
    const q = query(
      collection(db, "chats"),
      orderBy("createdAt"),
      limit(50),
    );
    const unsubscribe = onSnapshot(q, (QuerySnapshot) => {
      let messages = [];
      QuerySnapshot.forEach((doc) => {
        messages.push({ ...doc.data(), id: doc.id });
      });
      setMessages(messages);
    });
    return () => unsubscribe;
  }, []);
  return (
    <div className="messages">
      {messages?.map((message) => (
          <Message key={message.id} message={message} />
        ))}
        
      
    </div>
  )
}