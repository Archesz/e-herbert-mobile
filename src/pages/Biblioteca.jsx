import React from 'react'
import '../styles/biblioteca.scss'
import Menu from '../components/Menu/Menu'

function Biblioteca(props) {
  const objetoSerializado = localStorage.getItem("HerbertData");
  const data = JSON.parse(objetoSerializado)[0];
  
  return (
    <div className='biblioteca-container'>
      <Menu data={data}/>
      <span className='biblioteca-name'>A biblioteca estará disponível em breve!</span>
    </div>
  )
}

export default Biblioteca