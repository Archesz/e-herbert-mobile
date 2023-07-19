import React from 'react'
import Navmenu from '../components/Navmenu/Navmenu'
import Menu from '../components/Menu/Menu'

import '../styles/dashboard.scss'
import Planner from '../components/Planner/Planner';

function Dashboard() {

    const objetoSerializado = localStorage.getItem("HerbertData");
    const data = JSON.parse(objetoSerializado)[0];

    return (
        <div className="dashboard-container">
            <Menu data={data} />

            <div className="dashboard-painel">
                <span className="dashboard-title">Dashboard & Planos</span>

                <span className="dashboard-subtitle">Plano de Estudos</span>

                <span className="dashboard-explain">Essa versão do plano de estudos é um protótipo gerado com base nos dados adquiridos pelos vestibulares e utilizando as suas informações prévias.</span>

                <span className="dashboard-explain up-2">Abaixo estão as matérias recomendadas para estudar nessa semana!</span>

                <div className='planner-area'>
                    
                    <Planner />

                </div>

            </div>

            <Navmenu />

        </div>
    )
}

export default Dashboard