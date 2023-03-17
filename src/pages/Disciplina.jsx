import React, { useEffect, useState } from 'react'
import '../styles/disciplina.scss'

import Assunto from '../components/Assunto/Assunto'
import Menu from '../components/Menu/Menu'

function Disciplina(props){

    let data = props.data
    // let assuntos = Object.keys(data["Conteudos"])

    let disciplina = localStorage.getItem("Disciplina")

    const [conteudo, setConteudo] = useState([])
    const [assuntos, setAssuntos] = useState([])

    useEffect(() => {
        const usuariosRef = props.base.database().ref(`disciplinas/${disciplina}`);
        usuariosRef.on("value", (snapshot) => {
            let conteudos = snapshot.val();
            let conteudosArray = []

            let keys = Object.keys(conteudos["Conteudos"])

            for (let i = 0; i != keys.length; i++){
                conteudosArray[keys[i]] = conteudos["Conteudos"][keys[i]]
            }
            setConteudo(conteudosArray)
            setAssuntos(keys)
        });
    }, []);

    return (
        <div className='disciplina-container'>
            <Menu data={data}/>

            <div className='disciplina-col'>

                <div className='disciplina-welcome'>
                    <span className='disciplina-title'>{disciplina}</span>
                    <span className='disciplina-subtitle'>A ciência da lógica e dos números!</span>                
                </div>


                <div className='assuntos'>
                    {assuntos.map((assunto, index) => {
                        return(
                            <div key={index}>
                                
                                <Assunto nome={assunto} conteudos={conteudo[assunto]} materia={disciplina}/>
                                    
                            </div> 
                        )
                    })}
                </div>

            </div>            

        </div>
    )
}

export default Disciplina
