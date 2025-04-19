import { Link } from 'react-router-dom';
import './SignIn.css';
import React, { useState } from 'react';

export const SignIn = () => {
  const [signInErrors, setSignInErrors] = useState({
    email: '',
    password: '',
  });

  function signIn(event) {
    event.preventDefault();

    const formElements = event.currentTarget;
    const formData = new FormData(formElements);
    const email = formData.get('email');
    const password = formData.get('password');

    const newErrors = {
      email: !email ? 'please enter your email' : '',
      password: !password ? 'please enter your password' : '',
    };

    setSignInErrors(newErrors);
    if (Object.values(newErrors).some(error => error)) {
      return;
    }

    formElements.reset();
  }
  return (
    <div className="signIn-container">
      <form onSubmit={signIn} method="post" className="signIn-content">
        <h3>Login to Account</h3>
        <p className="signIn-description">
          Please enter your email and password
        </p>

        <span className="signIn-inputBox">
          <label htmlFor="email">
            <p className="signInLabel">Email</p>
            <input
              type="email"
              id="email"
              name="email"
              className="signIn-input"
              placeholder="Enter email"
            />
          </label>
          {signInErrors.email && (
            <p style={{ color: 'red', marginTop: '5px' }}>
              {signInErrors.email}
            </p>
          )}
        </span>

        <span className="signIn-inputBox">
          <label htmlFor="password">
            <p className="signInLabel">Password</p>
            <input
              type="password"
              id="password"
              name="password"
              className="signIn-input"
              placeholder="Enter Password"
            />
          </label>
          {signInErrors.password && (
            <p style={{ color: 'red', marginTop: '5px' }}>
              {signInErrors.password}
            </p>
          )}
        </span>

        <span className="signIn-submit">
          <button type="submit">Sign In</button>
        </span>

        <span className="signIn-createAdmin">
          <Link to="/createAdmin">
            <h5>Create Account</h5>
          </Link>
        </span>
      </form>
    </div>
  );
};
