import React from 'react'
import Navmenu from '../components/Navmenu/Navmenu'
import Menu from '../components/Menu/Menu'
import Bar from '../graphs/Bar';
import "../styles/graphs.scss"

function Graphs(props) {
    const objetoSerializado = localStorage.getItem("HerbertData");
    const data = JSON.parse(objetoSerializado)[0];

    return (
        <div className="dashboard-container">
            <Menu data={data} />

            <div className="dashboard-painel">
                <span className="dashboard-title">Dashboard & Planos</span>

                <div className="dashboard-data-field">
                    <span className='data-title'>Dados de Provas e Simulados</span>

                    <div className="form-group">
                        <div className='input-group'>
                            <select className='input-select'>
                                <option value="">Selecione a Prova</option>
                                <option value="Unicamp01">Unicamp - 01</option>
                                <option value="Colmeias01">Colmeias - 01</option>
                            </select>
                        </div>

                        <button className='btn-form' onClick="">Analisar</button>

                    </div>

                </div>

                <span className="dashboard-subtitle">Análise</span>

                <span className="dashboard-explain">Essa versão do plano de estudos é um protótipo gerado com base nos dados adquiridos pelos vestibulares e utilizando as suas informações prévias.</span>

                <div className="space"/>
                
                <Bar type="Acertos"/>

            </div>

            <Navmenu />

        </div>
    )
}

export default Graphs