import React from 'react'
import './Planner.scss'

function Planner(props) {
    return (
        <div className="planner-container">
            
            <div className="planner-area">

                <span className="planner-title math">Matemática</span>

                <div className="planner-disciplina">
                    <span className="disciplina-name">Matemática</span>
                    <span className="disciplina-theme">Conjuntos Numéricos</span>

                    <span className="disciplina-assunto">
                        Teoria dos Conjuntos
                    </span>

                </div>

                <div className="planner-disciplina">
                    <span className="disciplina-name">Matemática</span>
                    <span className="disciplina-theme">Geometria</span>

                    <span className="disciplina-assunto">
                        Área de Quadriláteros
                    </span>

                </div>

                <div className="planner-disciplina">
                    <span className="disciplina-name">Matemática</span>
                    <span className="disciplina-theme">Álgebra</span>

                    <span className="disciplina-assunto">
                        Sistemas Lineares
                    </span>

                </div>

            </div>

            <div className="planner-area">

                <span className="planner-title nature">Ciências da Natureza</span>

                <div className="planner-disciplina">
                    <span className="disciplina-name">Física</span>
                    <span className="disciplina-theme">Cinemática</span>

                    <span className="disciplina-assunto">
                        Movimento Uniforme
                    </span>

                </div>

                <div className="planner-disciplina">
                    <span className="disciplina-name">Química</span>
                    <span className="disciplina-theme">Química Orgânica</span>

                    <span className="disciplina-assunto">
                        MOL e Quantificação
                    </span>

                </div>

                <div className="planner-disciplina">
                    <span className="disciplina-name">Biologia</span>
                    <span className="disciplina-theme">Ecologia</span>

                    <span className="disciplina-assunto">
                        Relações Ecológicas
                    </span>

                </div>

            </div>

            <div className="planner-area">

                <span className="planner-title humans">Ciências Humanas</span>

                <div className="planner-disciplina">
                    <span className="disciplina-name">Geografia</span>
                    <span className="disciplina-theme">Geopolítica</span>

                    <span className="disciplina-assunto">
                        Globalização e Sistemas Econômicos
                    </span>

                </div>

                <div className="planner-disciplina">
                    <span className="disciplina-name">História</span>
                    <span className="disciplina-theme">História do Brasil</span>

                    <span className="disciplina-assunto">
                        Brasil Império
                    </span>

                </div>

                <div className="planner-disciplina">
                    <span className="disciplina-name">Geografia</span>
                    <span className="disciplina-theme">Geografia Física</span>

                    <span className="disciplina-assunto">
                        Relevos e Níveis dos Mares
                    </span>

                </div>

            </div>

            <div className="planner-area">

                <span className="planner-title languages">Linguagens e Códigos</span>

                <div className="planner-disciplina">
                    <span className="disciplina-name">Gramática</span>
                    <span className="disciplina-theme">Formação de Palavras</span>

                    <span className="disciplina-assunto">
                        Radicais de Palavras
                    </span>

                </div>

                <div className="planner-disciplina">
                    <span className="disciplina-name">Literatura</span>
                    <span className="disciplina-theme">Literatura Específica</span>

                    <span className="disciplina-assunto">
                        Escolas Literárias
                    </span>

                </div>

                <div className="planner-disciplina">
                    <span className="disciplina-name">Redação</span>
                    <span className="disciplina-theme">-</span>

                    <span className="disciplina-assunto">
                        Tema: Brasil para Surdos.
                    </span>

                </div>

            </div>



        </div>
    )
}

export default Planner