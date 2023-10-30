import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Footer, Navbar } from '../components';
import { auth } from './firebase';

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [username, setUsername] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [usernameError, setUsernameError] = useState('');
  const [registrationError, setRegistrationError] = useState('');

  const handleRegister = async () => {
    if (password !== confirmPassword) {
      setPasswordError('Passwords do not match.');
      return;
    }
    if (password.length < 6) {
      setPasswordError('Password should be at least 6 characters.');
      return;
    }
    
    // Add username validation logic
    if (username.length < 3) {
      setUsernameError('Username should be at least 3 characters.');
      return;
    }

    try {
      // Check if the username is available (API call to your backend)
      const isUsernameAvailable = await checkUsernameAvailability(username);

      if (!isUsernameAvailable) {
        setUsernameError('Username is already in use.');
        return;
      }

      const userCredential = await auth.createUserWithEmailAndPassword(email, password);
      // User registration successful
      console.log('User registered:', userCredential.user);
      window.location.href = '/'; // Redirect to the home page
    } catch (error) {
      if (error.code === 'auth/email-already-in-use') {
        setRegistrationError('The provided email is already in use.');
      } else {
        setRegistrationError('Error registering user. Please try again later.');
      }
    }
  };

  // Function to check if the username is available (replace with your actual API call)
  const checkUsernameAvailability = async (username) => {
    // Simulate a delay, replace with your API call to check the username
    await new Promise((resolve) => setTimeout(resolve, 1000));

    // Return true if username is available, false if it's already in use (replace with actual logic)
    return username !== 'existingUsername';
  };

  return (
    <>
      <Navbar />
      <div className="container my-3 py-3">
        <h1 className="text-center">Register</h1>
        <hr />
        <div className="row my-4 h-100">
          <div className="col-md-4 col-lg-4 col-sm-8 mx-auto">
            <form>
              <div className="form my-3">
                <label htmlFor="Username">Username</label>
                <input
                  type="text"
                  className="form-control"
                  id="Username"
                  placeholder="Enter Your Username"
                  onChange={(e) => setUsername(e.target.value)}
                />
                <p className="text-danger">{usernameError}</p>
              </div>
              <div className="form my-3">
                <label htmlFor="Email">Email</label>
                <input
                  type="email"
                  className="form-control"
                  id="Email"
                  placeholder="name@example.com"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="form my-3">
                <label htmlFor="Password">Password</label>
                <input
                  type="password"
                  className="form-control"
                  id="Password"
                  placeholder="Password"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className="form my-3">
                <label htmlFor="ConfirmPassword">Confirm Password</label>
                <input
                  type="password"
                  className="form-control"
                  id="ConfirmPassword"
                  placeholder="Confirm Password"
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
              </div>
              <p className="text-danger">{passwordError}</p>
              <p className="text-danger">{registrationError}</p>
              <div className="my-3">
                <p>
                  Already registered?{' '}
                  <Link to="/login" className="text-decoration-underline text-info">
                    Login
                  </Link>{' '}
                </p>
              </div>
              <div className="text-center">
                <button
                  className="my-2 mx-auto btn btn-dark"
                  type="button"
                  onClick={handleRegister}
                >
                  Register
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Register;
