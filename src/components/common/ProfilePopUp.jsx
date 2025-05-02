import './ProfilePopUp.css';
import { CgClose } from 'react-icons/cg';
import { CgProfile } from 'react-icons/cg';
import React from 'react';
import { Link } from 'react-router-dom';

export const ProfilePopUp = ({ isOpen, onClose }) => {
  if (!isOpen) return null;
  return (
    <div className="profilePopUp-container">
      <div className="profilePopUp-content">
        <span className="closeButton" onClick={onClose}>
          <CgClose color="var(--Black)" />
        </span>
        <span className="profilePopUp-profile">
          <CgProfile size="35px" color="var(--DarkGray)" />
        </span>
        <h3>Profile name</h3>
        <p>Email Address</p>

        <span className="signOut-button">
          <Link to="/signIn">
            <span>Sign Out</span>
          </Link>
        </span>
      </div>
    </div>
  );
};
