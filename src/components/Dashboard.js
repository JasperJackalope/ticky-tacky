import React from 'react';
import { Link } from 'react-router-dom';
import Navigation from './Navigation';
import '../App.css';
import './dashboard.css';
import Joey from './joey.png';

const Dashboard = () => {
  return (
    <div className="dashboard">
      <Navigation />
      <section className="portfolio container text-center padding">
        <h3>Are you dude enough to take on this gnarly challenge?</h3>
        <img src={Joey} alt="Joey Lawrence 1990s" className="centered-image" />
        <div className="button-image-wrapper">
          <Link to="/game">
            <button>Start New Game</button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Dashboard;
