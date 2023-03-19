import React from 'react'
import './ConteudoView.scss'
import {AiOutlineFilePdf} from 'react-icons/ai'
import Spoiler from './Spoiler'

function goTo(link){
    window.open(link, "_blank")
}

function ConteudoView(props) {

    if(props.type === "Material"){  
        return (
            <div className='conteudoView-container'>
                <span className='conteudoView-name'>{props.name}</span>
                
                <div className='materiais'>
                    {props.data["Material"].map((material) => {
                        return(
                            <div className='material-icon' onClick={() => {goTo(material["Link"])}}>
                                <AiOutlineFilePdf className="material-icone"/>
                                <span className='material-name'>{material["Nome"]}</span>
                            </div>
                        )
                    })}
                </div>

            </div>
        )
    } else if(props.type === "Exercícios"){
        return(
            <div className='conteudoView-container'>
                <span className='conteudoView-name'>{props.name} de Fixação</span>

                <div className='exercicios'>

                    {props.data["Exercicios"].map((exercicio, index) => {
                        return(
                            <div className='exercicio'>
                                
                                <span>{index + 1} - {exercicio["Enunciado"]}</span>
                                
                                <div className='alternativas'>
                                {exercicio["Alternativas"].map((alternativa) => {
                                    return(
                                        <span className='alternativa'>{alternativa}</span>
                                    )
                                })}
                                </div>
                                <div className='btn-row'>
                                    <Spoiler text={exercicio["Gabarito"]} name="Gabarito"/>
                                    <Spoiler text={exercicio["Resolução"]} name="Resolução"/>
                                </div>
                            </div>
                        )
                    })}

                </div>

            </div>
        )
    } else if(props.type === "Vídeos"){
        return(
            <div className='conteudoView-container'>
                <span className='no-video'>Sem vídeos disponíveis por enquanto.</span>
            </div>
        )
    }
}

export default ConteudoView