import React, { useState } from 'react'
import './Assunto.scss'

import {VscGraphLine} from 'react-icons/vsc'

const iconsMap = {
    "Estatística": <VscGraphLine className='icon-materia'/>
}

function goToMateria(materia){
    localStorage.setItem("Materia", materia);
    window.location.assign("/Conteudo")
}

function Assunto(props) {
    let data = props.conteudos
    let materia = props.materia

    return (
        <div className='assunto-container'>
            
            <div className='assunto-header'>
                {iconsMap[props.nome]}
                <span className='assunto-name'> {props.nome}</span> 
            </div>

    
            <div className='assunto-resumo'>
                Estatística é a disciplina que se dedica à coleta, análise e interpretação de dados. Ela permite entender e descrever fenômenos aleatórios, fazer previsões e tomar decisões baseadas em evidências.
            </div>

            <span className='conteudo-call'>Conteudo</span>

            <div className='assunto-row'>
                {data.map((conteudo) => {
                    return(
                        <div className='conteudo-container' onClick={() => {goToMateria(`${conteudo}`)}}>
                            <span className='conteudo'>{conteudo}</span>
                        </div>
                    )
                })}
            </div>

        </div>
    )
}

export default Assunto