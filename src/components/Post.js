import React from 'react'
import Header from './Header';
import SideBar from './SideBar';
import PostShow from './PostShow';
import { MDBRow, MDBCol } from 'mdbreact';
import '../App.css'

function Post() {
  return (
    <>
    <SideBar/>
        <Header/>
            <div className="container">
                <MDBRow className="my-5">
                    <MDBCol className="d-flex justify-content-center">
                        <PostShow/>
                    </MDBCol>
                </MDBRow>
            </div>


    </>
  )
}

export default Post