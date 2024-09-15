// import Card from 'react-bootstrap/Card';
import Card from './components/Card';
import './CardStyles.css';
import './HeaderBar.css';
import './App.css';
import ParticlesComponent from './components/particles';
import { Link, NavLink } from 'react-router-dom';
import { Nav } from 'react-bootstrap';

function Home() {
  return (
    <div className="App">
      <ParticlesComponent id="particles"/>
      <header className="header-bar">
        <p className="name">Israfil Bhagwandass</p>
        <nav className="nav-links">
          <a href="/about" className="link">About</a>
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
                  {/* <Card style={{ backgroundColor: '#212F45', display: 'flex', justifyContent: 'center', alignItems: 'center' }} className="hover-card col-12 col-sm-6 col-md-4 col-lg-3">
                    <Card.Title className='card-titles'>Robotics</Card.Title>
                  </Card> */}
                </NavLink>
              </nav>
            </div>
              <div className='card-wrapper'>
              <nav>
                <NavLink to="Robotics" style={{textDecoration: 'none'}}>
                  <Card title="PowerBI Dashboard"/>  
                  {/* <Card style={{ width: '18rem', height: '18rem', backgroundColor: '#212F45', display: 'flex', justifyContent: 'center', alignItems: 'center'  }} className="hover-card">
                    <Card.Title className='card-titles'>PowerBI Dashboard</Card.Title>
                  </Card> */}
                </NavLink>
              </nav>
            </div>
            <div className='card-wrapper'>
              <nav>
              <a href='https://www.foodshots2u.com/music'target='_blank' rel='noopener noreferrer' className='no-underline'>
                <Card title="Robotics"/>
                  {/* <Card style={{ width: '18rem', height: '18rem', backgroundColor: '#212F45', display: 'flex', justifyContent: 'center', alignItems: 'center'  }} className="hover-card">
                    <Card.Title className='card-titles'>Music</Card.Title>
                  </Card> */}
                </a>
              </nav>
            </div>
            <div className='card-wrapper'>
              <nav>
                <a href='https://www.foodshots2u.com/'target='_blank' rel='noopener noreferrer' className='no-underline'>
                  <Card title="Robotics"/>
                  {/* <Card style={{ width: '18rem', height: '18rem', backgroundColor: '#212F45', display: 'flex', justifyContent: 'center', alignItems: 'center'  }} className="hover-card">
                    <Card.Title className='card-titles'>Photography</Card.Title>
                  </Card> */}
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
