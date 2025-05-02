import './Dashboard.css';
import React from 'react';
import dashboardImage from '../../assets/dashboard.jpg';

export const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <div className="dashboard-header">
        <h3>Dashboard</h3>
      </div>
      <div className="dashboard-content">
        <img src={dashboardImage} alt="dashboard" />
      </div>
    </div>
  );
};
