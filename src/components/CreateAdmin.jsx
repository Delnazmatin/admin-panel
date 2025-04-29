import React, { useState } from 'react';
import './CreateAdmin.css';
import { useNavigate } from 'react-router-dom';

export const CreateAdmin = () => {
  const navigate = useNavigate();
  const [signUpError, setSignUpError] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    phone: '',
  });

  function signUp(event) {
    event.preventDefault();

    const formElements = event.currentTarget;
    const formData = new FormData(formElements);
    const name = formData.get('name')?.trim();
    const email = formData.get('email')?.trim();
    const password = formData.get('password')?.trim();
    const confirmPassword = formData.get('confirmPassword')?.trim();
    const phone = formData.get('phone')?.trim();

    const newErrors = {
      name: !name ? 'please enter your name' : '',
      email: !email ? 'please enter your email' : '',
      password: !password ? 'please enter your password' : '',
      confirmPassword: !confirmPassword
        ? 'please enter your password again'
        : '',
      phone: !phone ? 'please enter your phone' : '',
    };

    if (password && confirmPassword && confirmPassword !== password) {
      newErrors.confirmPassword = 'Password do not match';
    }

    setSignUpError(newErrors);

    if (Object.values(newErrors).some(error => error)) {
      return;
    }
    navigate('/signIn', { replace: true });
    formElements.reset();
  }

  return (
    <div className="createAdmin-container">
      <form onSubmit={signUp} method="post" className="createAdmin-content">
        <h3>Create Admin Account</h3>
        <p className="createAdmin-description">Please enter your information</p>

        <span className="createAdmin-inputBox">
          <label htmlFor="name">
            <p className="createAdminLabel">Name</p>
            <input
              type="text"
              id="name"
              name="name"
              className="createAdmin-input"
              placeholder="Enter name"
            />
          </label>
          {signUpError.name && (
            <p style={{ color: 'red', marginTop: '5px' }}>{signUpError.name}</p>
          )}
        </span>

        <span className="createAdmin-inputBox">
          <label htmlFor="email">
            <p className="createAdminLabel">Email</p>
            <input
              type="email"
              id="email"
              name="email"
              className="createAdmin-input"
              placeholder="Enter email"
            />
          </label>
          {signUpError.email && (
            <p style={{ color: 'red', marginTop: '5px' }}>
              {signUpError.email}
            </p>
          )}
        </span>

        <span className="createAdmin-inputBox">
          <label htmlFor="password">
            <p className="createAdminLabel">Password</p>
            <input
              type="password"
              id="password"
              name="password"
              className="createAdmin-input"
              placeholder="Enter Password"
            />
          </label>
          {signUpError.password && (
            <p style={{ color: 'red', marginTop: '5px' }}>
              {signUpError.password}
            </p>
          )}
        </span>

        <span className="createAdmin-inputBox">
          <label htmlFor="Confirm-password">
            <p className="createAdminLabel">Confirm Password</p>
            <input
              type="password"
              id="Confirm-password"
              name="confirmPassword"
              className="createAdmin-input"
              placeholder="Enter Password again"
            />
          </label>
          {signUpError.confirmPassword && (
            <p style={{ color: 'red', marginTop: '5px' }}>
              {signUpError.confirmPassword}
            </p>
          )}
        </span>

        <span className="createAdmin-inputBox">
          <label htmlFor="phone">
            <p className="createAdminLabel">phone Number</p>
            <input
              type="tel"
              id="phone"
              name="phone"
              className="createAdmin-input"
              placeholder="Enter phone number"
            />
          </label>
          {signUpError.phone && (
            <p style={{ color: 'red', marginTop: '5px' }}>
              {signUpError.phone}
            </p>
          )}
        </span>

        <span className="createAdmin-submit">
          <button type="submit">Create</button>
        </span>
      </form>
    </div>
  );
};
