import React, { useState } from 'react';
import './Menu.scss'
import { TbMenu2, TbEdit } from 'react-icons/tb'
import { MdSearch, MdNotifications } from 'react-icons/md'


import logo from '../../assets/logo.png'
import Avatar from '../Avatar/Avatar';

const menuItems = [
  { label: 'Home', url: '/Home' },
  { label: 'Eventos', url: '/Eventos' },
  { label: 'Biblioteca', url: '/Biblioteca' },
  { label: 'Quiz', url: '/Quiz' }
];

function MobileMenu(props) {
  const data = props.data
  const [isOpen, setIsOpen] = useState(false);
  const [isSearchVisible, setIsSearchVisible] = useState(false);

  let urlfoto = ""
  if(data["URLFoto"] == ""){
      urlfoto = "https://dev.promoview.com.br/uploads/2017/04/b72a1cfe.png"
  } else{
      urlfoto = data["URLFoto"]
  }

  const handleMenuClick = () => {
    setIsOpen(!isOpen);
  };

  function handleSearchIconClick() {
    setIsSearchVisible(!isSearchVisible);
  }

  return (
    <nav className="mobile-menu">
      <div className="mobile-menu-top">

        <img src={logo} alt="Logo Herbert" className='mobile-logo' onClick={() => {window.location.assign("/Home")}}/>

        <TbMenu2 className="mobile-menu-button" onClick={handleMenuClick} />

        <MdSearch onClick={() => {handleSearchIconClick()}}/>
        <MdNotifications />

        <Avatar url={urlfoto} />
      </div>

      {isSearchVisible && (
        <div class="menu-search">
            <MdSearch className='menu-icon'/>
            <input type="text" className='menu-search-input' placeholder="Pesquisar uma Pessoa" />
        </div>
      )}

      <ul className={`mobile-menu-items ${isOpen ? 'open' : ''}`}>
        {menuItems.map((item, index) => (
          <li key={index}>
            <a href={item.url}>{item.label}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default MobileMenu;
