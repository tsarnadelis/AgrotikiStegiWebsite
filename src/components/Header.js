import React from 'react';
import logo from '../assets/images/logo.png';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <img src={logo} alt="Αγροτική Στέγη logo" className='logo'/>
      <h1>Αγροτική Στέγη <br/>Ποντικίδου Δήμητρα</h1>
    </header>
    
  );
};

export default Header;
