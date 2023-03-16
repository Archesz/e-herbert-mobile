import React from 'react'
import './Assunto.scss'

function goToMateria(materia){
    localStorage.setItem("Materia", materia);
    window.location.assign("/Conteudo")
}

function Assunto(props) {
    let data = props.conteudos
    return (
        <div className='assunto-container'>
            
            <span className='assunto-name'>{props.nome}</span> 

            <div className='assunto-row'>
                {data.map((conteudo) => {
                    return(
                        <div className='conteudo-container' onClick={() => {goToMateria(`${conteudo}`)}}>
                            <span className='assunto'>{props.materia}</span> 
                            <span className='conteudo'>{conteudo}</span>
                        </div>
                    )
                })}
            </div>

        </div>
    )
}

export default Assunto