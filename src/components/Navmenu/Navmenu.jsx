import React from 'react'
import './Navmenu.scss'

import { TbHome2, TbBook, TbUser, TbDeviceDesktopAnalytics } from 'react-icons/tb'
import { CiDumbbell } from 'react-icons/ci'

const menuItems = [
    { label: 'Home', url: '/Home' },
    { label: 'Eventos', url: '/Eventos' },
    { label: 'Biblioteca', url: '/Biblioteca' },
    { label: 'Quiz', url: '/Quiz' },
    { label: "Análise", url: "/Análise" }
];

function Navmenu(props) {
    return (
        <div className='navmenu-container'>
            
            <a className='navmenu-item' href="/Home">
                <TbHome2 className='navmenu-icon'/>    
                <label className='navmenu-label'>Home</label>        
            </a>

            <a className='navmenu-item' href="/Disciplinas">
                <TbBook className='navmenu-icon'/>
                <label className='navmenu-label'>Disciplinas</label>
            </a>
            
            <a className='navmenu-item' href="/Quiz">
                <CiDumbbell className='navmenu-icon'/>
                <label className='navmenu-label'>Exercícios</label>
            </a>

            <a className='navmenu-item' href="/Dashboard">
                <TbDeviceDesktopAnalytics className='navmenu-icon'/>
                <label className='navmenu-label'>Dados</label>
            </a>

            <a className='navmenu-item' href="/Perfil">
                <TbUser className='navmenu-icon'/>
                <label className='navmenu-label'>Perfil</label>
            </a>

        </div>
    )
}

export default Navmenu