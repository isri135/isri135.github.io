// import Card from 'react-bootstrap/Card';
import Card from './components/Card';
import './CardStyles.css';
import './HeaderBar.css';
import './App.css';
import ParticlesComponent from './components/particles';
import { NavLink } from 'react-router-dom';
import React, { useState } from 'react';
// import { toggleMenu } from './components/Toggle';

function Home() {
  const [menuActive, setMenuActive] = useState(false);

  // Toggle function
  const toggleMenu = () => {
    setMenuActive(!menuActive); // Toggle the menu state
  };

  return (
    <div className="App">
      <ParticlesComponent id="particles"/>
      <header className="header-bar">
        <p className="name">Israfil Bhagwandass</p>
        <nav className='nav-links' >
        <a href="https://www.linkedin.com/in/your-linkedin" className="link" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        <a href="https://www.instagram.com/your-instagram" className="link" target="_blank" rel="noopener noreferrer">Instagram</a>
        </nav>
      </header>
      <div className='center-container'>
        <div className='card-grid'>
          <div className='introduction'>
            Hi! Check out some of my projects and experiences!!
          </div>
          <div className='cards'>
            <div className='card-wrapper'>
              <nav>
                <NavLink to="Robotics" style={{textDecoration: 'none'}}>
                <Card title="Robotics"/>
                </NavLink>
              </nav>
            </div>
              <div className='card-wrapper'>
              <nav>
                <NavLink to="Robotics" style={{textDecoration: 'none'}}>
                  <Card title="PowerBI Dashboard"/>  
                </NavLink>
              </nav>
            </div>
            <div className='card-wrapper'>
              <nav>
              <a href='https://www.foodshots2u.com/music'target='_blank' rel='noopener noreferrer' className='no-underline'>
                <Card title="Music"/>
                </a>
              </nav>
            </div>
            <div className='card-wrapper'>
              <nav>
                <a href='https://www.foodshots2u.com/'target='_blank' rel='noopener noreferrer' className='no-underline'>
                  <Card title="Photography"/>
                </a>
              </nav>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
