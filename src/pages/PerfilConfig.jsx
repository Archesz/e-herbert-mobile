import React from 'react'
import '../styles/perfil.scss'

import Menu from '../components/Menu/Menu'
import Perfil from '../components/Perfil/Perfil';
import Conquista from '../components/Conquista/Conquista'

function PerfilConfig() {
    
    const objetoSerializado = localStorage.getItem("HerbertData");
    const data = JSON.parse(objetoSerializado)[0];
    const conquistas = data["Conquistas"]

    return (
        <div className='perfilConfig-container'>
            <Menu data={data}/>

            <Perfil data={data}/>

            <div className='conquistas-container'>
                <span className='conquistas-text'>Conquistas do Estudante: </span>

                <div className='conquistas-row'>

                    {conquistas.map((conquista) => {
                        return(
                            <Conquista label={conquista["Label"]} name={conquista["Nome"]}/>
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

        </div>
    )
}

export default PerfilConfig