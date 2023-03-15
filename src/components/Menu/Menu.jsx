import React, { useState } from 'react';
import './Menu.scss'
import { TbMenu2, TbEdit } from 'react-icons/tb'

import logo from '../../assets/logo.png'

const menuItems = [
  { label: 'Home', url: '/' },
  { label: 'Disciplinas', url: '/' },
  { label: 'Biblioteca', url: '/' },
  { label: 'Quiz', url: '/Quiz' },
  { label: 'Recomendações', url: '/' },
  { label: 'Configurações', url: '/' },
];  

function MobileMenu(props) {
  const data = props.data
  const [isOpen, setIsOpen] = useState(false);

  const handleMenuClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="mobile-menu">
      <div className="mobile-menu-top">

        <img src={logo} alt="Logo Herbert" className='mobile-logo' />

        <TbMenu2 className="mobile-menu-button" onClick={handleMenuClick} />

      </div>

      <ul className={`mobile-menu-items ${isOpen ? 'open' : ''}`}>
        <div className='mobile-menu-perfil'>

          <div className='row'>
            <img src={data["URLFoto"]} alt="" className='avatar-foto' />
            <div className='perfil-infos'>
              <span className='perfil-name'>{data["Nome"]}</span>
              <span className='perfil-subname'>{data["Apelido"]}</span>
            </div>
          </div>

          <TbEdit className='btn-edit' />

        </div>

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
