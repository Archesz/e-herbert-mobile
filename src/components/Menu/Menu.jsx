import React from 'react';
import './Menu.scss'

import logo from '../../assets/logo.png'
import Avatar from '../Avatar/Avatar';

function MobileMenu(props) {
  const data = props.data

  let urlfoto = ""
  if(data["URLFoto"] === ""){
      urlfoto = "https://dev.promoview.com.br/uploads/2017/04/b72a1cfe.png"
  } else{
      urlfoto = data["URLFoto"]
  }

  return (
    <nav className="mobile-menu">
      <div className="mobile-menu-top">

        <img src={logo} alt="Logo Herbert" className='mobile-logo' onClick={() => {window.location.assign("/Home")}}/>

        <Avatar url={urlfoto} />
      </div>

    </nav>
  );
};

export default MobileMenu;
