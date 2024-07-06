import React from 'react';
import logo from '../assets/images/logo.png';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <img src={logo} alt="Αγροτική Στέγη logo" className='logo'/>
      <h1>Αγροτική Στέγη <br/>Ποντικίδου Δήμητρα</h1>
      <div className='phone-container'>
        <a className='phone-text' href="tel:+302591061987">Τηλέφωνο<br/>25910 61987</a>
      </div>
    </header>
    
  );
};

export default Header;
