import React from 'react'
import '../styles/perfil.scss'

import Menu from '../components/Menu/Menu'
import Perfil from '../components/Perfil/Perfil';
import Conquista from '../components/Conquista/Conquista'
import Navmenu from '../components/Navmenu/Navmenu'

import { TbPlus } from 'react-icons/tb'  

function PerfilConfig() {

    const objetoSerializado = localStorage.getItem("HerbertData");
    const data = JSON.parse(objetoSerializado)[0];
    const conquistas = data["Conquistas"]

    return (
        <div className='perfilConfig-container'>
            <Menu data={data} />

            <div className='home-perfil-background'></div>

            <div className='home-perfil'>
                <Perfil data={data} config={true} />

            </div>

            <div className='conquistas-container'>
                <div className='conquista-header'>
                    <span className='conquistas-text'>Conquistas do Estudante </span>
                    <TbPlus className='icon-plus'/>
                </div>

                <div className='conquistas-row'>

                    {conquistas.map((conquista, index) => {
                        return (
                            <Conquista label={conquista["Label"]} name={conquista["Nome"]} text="Faço parte da Turma Alfa da plataforma!"/>
                        )
                    })}

                </div>

            </div>

            <div className='cards-col'>

                <div className='card-area'>

                    <div className='card-left'>Questões Resolvidas</div>

                    <div className='card-right'>0</div>

                </div>

                <div className='card-area'>

                    <div className='card-left'>Provas Resolvidas</div>

                    <div className='card-right'>0</div>

                </div>

                <div className='card-area'>

                    <div className='card-left'>Desafios Concluidos</div>

                    <div className='card-right'>0</div>

                </div>

            </div>
            
            <Navmenu />

        </div>
    )
}

export default PerfilConfig