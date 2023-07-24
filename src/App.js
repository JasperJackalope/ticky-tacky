import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import logo from './logo.svg';
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import Dashboard from './components/Dashboard';
import Header from "./components/Header";
import Footer from "./components/Footer";
import GamePage from './components/Game';

function App() {
  return (
    <div className="App">
     {console.log("Rendering Header component")}
      <Header />
      <main>
          <Router>
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/game" element={<GamePage />} />
              <Route path="/dashboard" element={<Dashboard />} />
            </Routes>
          </Router>
      </main>
      <Footer />
    </div>
  );
}

export default App;
