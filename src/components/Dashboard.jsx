import './Dashboard.css';

import React from 'react';

export const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <div className="dashboard-header">
        <h3>Dashboard</h3>
      </div>
      <div className="dashboard-content">
        <img src="/dashboard.jpg" alt="dashboard" />
      </div>
    </div>
  );
};
