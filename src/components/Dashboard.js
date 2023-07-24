import React from 'react';
import { Link } from 'react-router-dom';
import Navigation from './Navigation';
import './dashboard.css'; // import the CSS file

// This is the best Dashboard
const Dashboard = () => {
  return (
    <div className="dashboard">
      <Navigation />
      <section className="portfolio container text-cente padding">
        <h3>Welcome!</h3>
        <Link to="/game">
          <button>Start New Game</button>
        </Link>
      </section>
    </div>
  );
};

export default Dashboard;
