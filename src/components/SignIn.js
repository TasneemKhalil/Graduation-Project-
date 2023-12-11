import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import SIgn_img from './SIgn_img';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import { NavLink } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import Header from './Header';
import './SignIn.css'; // Import the CSS file containing the custom styles
import {  signInWithEmailAndPassword , onAuthStateChanged} from "firebase/auth";
import { auth } from '../firebase';
import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";

const SignIn = () => {
  const [err, setErr] = useState(false);
  const navigate = useNavigate();
  
  const OnSubmit = async (e) => {
    e.preventDefault();
  
    const { email, password } = inpval;
  
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/AddTask");
    } catch (err) {
      setErr(true);
    }
  };
  
  ///////////////////////////////////////////////////////////////////////////
  const [errors, setErrors] = React.useState({});


  const handleError = (error, input) => {
    setErrors(prevState => ({...prevState, [input]: error}));
  };
  ///////////////////////////////////////////////
  const history = useNavigate();

  const handleNavigation = () => {
    history.push('/AddSub');
  };

  const [inpval, setInpval] = useState({
    email: '',
    password: '',
  });

  const [data, setData] = useState([]);
  console.log(inpval);

  const getdata = (e) => {
    const { value, name } = e.target;

    setInpval(() => {
      return {
        ...inpval,
        [name]: value,
      };
    });
  };

  const addData = (e) => {
    e.preventDefault();

    const getuserArr = localStorage.getItem('useryoutube');
    console.log(getuserArr);

    const { email, password } = inpval;
    if (email === '') {
      toast.error('username field is required', {
        position: 'top-center',
      });
    } else if (password === '') {
      toast.error('password field is required', {
        position: 'top-center',
      });
    } else if (password.length < 5) {
      toast.error('password length must be greater than five', {
        position: 'top-center',
      });
    } else {
      // Handle form submission or validation
    }
  };

  return (
    <>
      <Header />
      <div className="container mt-5">
        <div className="form-container">
          <div className="left_data mt-3 p-3">
            <h3 className="text-center">Sign In</h3>
            <Form>
              <Form.Group className="mb-3" controlId="formBasicUsername">
                <Form.Control type="email" name="email" onChange={getdata} placeholder="Enter Email" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Control type="password" name="password" onChange={getdata} placeholder="Password" />
              </Form.Group>

              <Button as={NavLink} to="/AddSub" variant="primary" onClick={OnSubmit} style={{ background: "#0078AA" }} type="submit">
                Sign In
              </Button>
              {err && <span>Something went wrong</span>}
            </Form>
          </div>
          <div className="right_data">
            <SIgn_img />
          </div>
        </div>
        <ToastContainer />
      </div>
    </>
  );
};

export default SignIn;
