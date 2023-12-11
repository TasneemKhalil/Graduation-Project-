import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import butterflyImage from '../assets/butterfly_104.png';

const Header = () => {
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
            <Navbar.Brand href="#SignUp" style={{ fontSize: '1.8rem' }}>
              Metanoia
            </Navbar.Brand>
          </div>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
