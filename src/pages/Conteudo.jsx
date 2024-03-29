import React, {useState} from 'react'
import DisciplinaIcon from '../components/DisciplinaIcon/DisciplinaIcon'
import Menu from '../components/Menu/Menu'
import Navmenu from '../components/Navmenu/Navmenu'

import '../styles/conteudo.scss'

import {TbPencilPlus, TbBook2, TbVideo} from 'react-icons/tb'
import ConteudoView from '../components/ConteudoView/ConteudoView'


function Conteudo(props) {
    const objetoSerializado = localStorage.getItem("HerbertData");
    const user = JSON.parse(objetoSerializado)[0];
    
    const data = props.data
    const [type, setType] = useState("Material")

    return (
        <div className='conteudo-container-screen'>

            <Menu data={user}/>

            <div className='conteudo-col'>
                
                <div className='conteudo-welcome'>
                    <span className='conteudo-name'>{data["Materia"]}</span>
                    <span className='conteudo-assunto'>{data["Nome"]}</span>                
                </div>

                <div className='conteudo-options'>
                    <DisciplinaIcon materia="Material" icon={<TbBook2 className="option-icon"/>} onClick={() => {setType("Material")}}/>
                    <DisciplinaIcon materia="Fixação" icon={<TbPencilPlus className="option-icon"/>} onClick={() => {setType("Exercícios")}}/>
                    <DisciplinaIcon materia="Vídeos" icon={<TbVideo className="option-icon"/>} onClick={() => {setType("Vídeos")}}/>
                </div>

                <ConteudoView type={type} name={type} data={data}/>

            </div>

            <Navmenu />

        </div>
    )
}

export default Conteudo