import React from 'react'
import Header from './Header';
import SideBar from './SideBar';
import CommentShow from './CommentShow';
import { MDBRow, MDBCol } from 'mdbreact';
import '../App.css'


function Comment() {
  return (
    <>
    <SideBar/>
        <Header/>
            <div className="container">
                <MDBRow className="my-5">
                    <MDBCol className="d-flex justify-content-center">
                        <CommentShow/>
                    </MDBCol>
                </MDBRow>
            </div>


    </>
    
  )
}

export default Comment