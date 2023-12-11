import FormControl from 'react-bootstrap/FormControl';
import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import butterflyImage from '../assets/butterfly_104.png';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import { FaSearch } from 'react-icons/fa';

const WebHeader = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container className="d-flex align-items-center justify-content-between">
          <div className="d-flex align-items-center">
            <Image
              src={butterflyImage}
              width="50"
              height="50"
              className="mr-2"
              alt="A butterfly logo for Metanoia"
            />
            <Navbar.Brand href="#Home" style={{ fontSize: '1.8rem' }}>
              Metanoia
            </Navbar.Brand>
          </div>
          <Form inline>
            <div className="position-relative">
              <FormControl
                type="text"
                placeholder="Search"
                className="mr-sm-2 pr-5"
                style={{
                  backgroundColor: '#293846',
                  color: '#ffffff',
                  border: '1px solid #293846',
                  borderRadius: '20px',
                  outline: 'none',
                  boxShadow: 'none',
                }}
              />
              <FaSearch
                className="search-icon"
                style={{
                  color: '#ffffff',
                  position: 'absolute',
                  right: '10px',
                  top: '50%',
                  transform: 'translateY(-50%)',
                }}
              />
            </div>
          </Form>
        </Container>
      </Navbar>
    </>
  );
};

export default WebHeader;
