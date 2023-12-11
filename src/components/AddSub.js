import React from 'react';
import { useState } from "react";
import Header from './Header';
import SideBar from './SideBar';

import { MDBRow, MDBCol } from 'mdbreact';
import TableDemo from './TableDemo'
import '../App.css'

const AddSub = () => {
   
    return(
        <>
            <SideBar/>
            <Header/>
            {/* <MDBRow className="my-4">
                <MDBCol className="d-flex justify-content-center">
                    
                </MDBCol>
            </MDBRow> */}
            <div className="container">
                <MDBRow className="my-5">
                    <MDBCol className="d-flex justify-content-center">
                        <TableDemo/>
                    </MDBCol>
                </MDBRow>
            </div>
        </>
    )
}

export default AddSub;
