import React from 'react';
// import logo from '../assets/images/logo.png';
import logo_cropped from '../assets/images/logo_cropped.png';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <img src={logo_cropped} alt="Αγροτική Στέγη logo" className='logo'/>
      <h1>Αγροτική Στέγη <br/>Ποντικίδου Δήμητρα</h1>
      <div className='phone-container'>
        <i class="fa-solid fa-phone fa-2xl" style={{color: 'white', width: '40px', height: 'auto', marginRight: '15px', alignContent: 'center', padding: '10px 0' }}></i>
        <a className='phone-text' href="tel:+302591061987">25910 61987</a>
      </div>
    </header>
  );
};

export default Header;
