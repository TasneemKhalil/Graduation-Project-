import React from 'react';
import Button from 'react-bootstrap/Button';
import SIgn_img from './SIgn_img';
import { NavLink, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Header from './Header';

const Starting = () => {
  const history = useNavigate();

  const handleAdminLogin = () => {
    // Perform admin login logic here
    console.log('Admin login');
    history('/SignIn');
  };

  const handleExpertLogin = () => {
    // Perform expert login logic here
    console.log('Expert login');
    history('/AddSub');
  };

  return (
    <>
      <Header />
      <div className="container mt-5">
        <section className="d-flex justify-content-between form-container">
          <div className="left_data mt-5 p-5" style={{ flex: '1' }}>
            <div className="d-flex flex-column align-items-left" style={{ maxWidth: '400px', marginRight: '100px' }}>
              <Button
                className="mb-3 btn btn-primary"
                onClick={handleAdminLogin}
                style={{ width: '400%', borderRadius: '20px', backgroundColor: '#0078AA' }}
              >
                Login as Admin
              </Button>
              <Button
                onClick={handleExpertLogin}
                className="btn btn-primary"
                style={{ width: '400%', borderRadius: '20px', backgroundColor: '#0078AA' }}
              >
                Login as Expert
              </Button>
            </div>
          </div>
          <SIgn_img />
        </section>
        <ToastContainer />
      </div>
    </>
  );
};

export default Starting;
