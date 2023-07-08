import React from 'react'
import './Today.scss'

const hoje = new Date();
const dia = hoje.toLocaleDateString();

const aulas = [
    {"Disciplina": "Sem aulas hoje", "Assunto": "-"},
    {"Disciplina": "Sem aulas hoje", "Assunto": "-"},
    {"Disciplina": "Sem aulas hoje", "Assunto": "-"}
]

function Today() {
    return (
        <div className='today-container'>
            
            <div className='today-image'/>

            <div className='today-content'>

                <div className='today-row'>
                    <span className='today-name'>Aulas do Dia - {dia}</span>
                </div>

                <div className='aulas'>
                    {aulas.map((aula) => {
                        return(
                            <div className='aula'>
                                <span className='aula-name'>{aula["Disciplina"]}</span>
                                <span title={aula["Assunto"]} className='aula-assunto' alt={aula["Assunto"]}>{aula["Assunto"]}</span>
                            </div>
                        )
                    })}
                </div>


            </div>
        </div>
    )
}

export default Today