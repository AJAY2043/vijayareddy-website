import React, { useState } from 'react';
import './navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isActive, setIsActive] = useState(false);

  const toggleMenu = () => {
    setIsActive(!isActive);
  };

  return (
    <div className={`navbar ${isActive ? 'active' : ''}`}>
      <Link to="/" style={{ textDecoration: 'none' }}>
        <h3>Annapurna Matrimony</h3>
      </Link>

      <div className="hamburger" onClick={toggleMenu}>
        &#9776;
      </div>

      <div className={`nav-menu ${isActive ? 'active' : ''}`}>
        <Link to="/" style={{ textDecoration: 'none' }}>Home</Link>
        <Link to="/aboutus" style={{ textDecoration: 'none' }}>About Us</Link>
        <Link to="/carrers" style={{ textDecoration: 'none' }}>Careers</Link>
        <Link to="/contactus" style={{ textDecoration: 'none' }}>Contact Us</Link>
        <Link to="/CMDdesk" style={{ textDecoration: 'none' }}>CMD Desk</Link>
        <Link to="/help" style={{ textDecoration: 'none' }}>Help</Link>
      </div>

      {/* <div className="rigester">
        <Link to="/register" style={{ textDecoration: 'none' }}>
          <p>Register For Free</p>
        </Link>
      </div> */}
      <div className="login">
        <Link to="/signinsignup" style={{ textDecoration: 'none' }}>
          <p>SignIn/SignUp</p>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
