import React from 'react';
import { useState } from "react";
import Header from './Header';
import { MDBRow, MDBCol } from 'mdbreact';
import '../App.css'
import SideBarExpert from './SideBarExpert';
import TaskInput from './TaskInput';

const AddTask = () => {
   
    return(
        <>
            <SideBarExpert/>
            <Header/>
            <div className="container">
                <MDBRow className="my-5">
                    <MDBCol className="d-flex justify-content-center">
                     <TaskInput/>
                    </MDBCol>
                </MDBRow>
            </div>
        </>
    )
}

export default AddTask;
