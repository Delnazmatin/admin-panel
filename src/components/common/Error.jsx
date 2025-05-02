import { Link } from 'react-router-dom';
import './Error.css';
import React from 'react';
import errorImage from '../../assets/error.jpg';

export const Error = () => {
  return (
    <div className="error-container">
      <div className="error-content">
        <div className="error-image">
          <img src={errorImage} alt="404" />
        </div>
        <div className="error-description">
          <p>Looks like you've got lost...</p>
          <span className="error-backButton">
            <Link to="">
              <span>Back to Home</span>
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
};
