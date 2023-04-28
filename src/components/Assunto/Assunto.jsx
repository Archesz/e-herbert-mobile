import React, { useState } from 'react'
import './Assunto.scss'

function goToMateria(materia){
    localStorage.setItem("Materia", materia);
    window.location.assign("/Conteudo")
}

function Assunto(props) {
    let data = props.conteudos
    console.log(data)
    return (
        <div className='assunto-container'>
            
            <div className='assunto-header'>
                <span className='assunto-name'> {props.nome}</span> 
            </div>

    
            <div className='assunto-resumo'>
                Aqui deve ir um texto com a descrição resumida do assunto.
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

/* 
                {data.map((conteudo) => {
                    return(
                        <div className='conteudo-container' onClick={() => {goToMateria(`${conteudo}`)}}>
                            <span className='conteudo'>{conteudo}</span>
                        </div>
                    )
                })}
*/