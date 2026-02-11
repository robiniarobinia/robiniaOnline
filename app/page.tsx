import React from 'react';
import { Link } from 'react-router-dom';

const ReportageCard = ({ title, content }) => (
  <div className="reportage-card">
    <h2>{title}</h2>
    <p>{content}</p>
  </div>
);

const Homepage = () => {
  return (
    <div style={{ backgroundColor: '#e0f7e0', padding: '20px' }}>
      <h1 style={{ color: '#2e7d32' }}>Welcome to the Homepage</h1>
      <nav>
        <ul>
          <li>
            <Link to="/admin" style={{ color: '#2e7d32' }}>Admin</Link>
          </li>
        </ul>
      </nav>
      <div className="reportage-section">
        <ReportageCard title="Reportage Title 1" content="Content for reportage 1." />
        <ReportageCard title="Reportage Title 2" content="Content for reportage 2." />
        {/* Add more reportage cards as necessary */}
      </div>
    </div>
  );
};

export default Homepage;
