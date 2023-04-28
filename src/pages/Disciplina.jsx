import React, { useEffect, useState } from 'react'
import '../styles/disciplina.scss'

import Assunto from '../components/Assunto/Assunto'
import Menu from '../components/Menu/Menu'

const professores = [
    {"Nome": "Jovi", "Foto": "https://pps.whatsapp.net/v/t61.24694-24/323807984_895529844989283_6961357159995897617_n.jpg?ccb=11-4&oh=01_AdQZ-ElOFqgPgYoI3J03OpLxcWDYRJhV6pGaYa71tm8FTQ&oe=6423158D"},
    {"Nome": "Profeta", "Foto": "https://pps.whatsapp.net/v/t61.24694-24/295008300_421349299965232_2711014818918594560_n.jpg?ccb=11-4&oh=01_AdQbuJOPIQvQsTqqFgd5JkTLuIc7HBUbOl5p7GWlsVgAqw&oe=64230BBD"}
]

function Disciplina(props){

    const objetoSerializado = localStorage.getItem("HerbertData");
    const data = JSON.parse(objetoSerializado)[0];

    let disciplina = localStorage.getItem("Disciplina")

    const [conteudo, setConteudo] = useState([])
    const [assuntos, setAssuntos] = useState([])
    const [professores, setProfessores] = useState([])
    const [frase, setFrase] = useState()

    useEffect(() => {
        const usuariosRef = props.base.database().ref(`disciplinas/${disciplina}`);

        usuariosRef.on("value", (snapshot) => {
            let conteudos = snapshot.val();
            let conteudosArray = []

            let keys = Object.keys(conteudos["Conteudos"])
            let frase = conteudos["Frase"]

            let professores = Object.keys(conteudos["Professores"])
            
            for (let i = 0; i !== keys.length; i++){
                conteudosArray[keys[i]] = conteudos["Conteudos"][keys[i]]
            }

            setConteudo(conteudosArray)
            setAssuntos(keys)
            setProfessores(professores)
            setFrase(frase)
        });
    }, []);

    return (
        <div className='disciplina-container'>
            <Menu data={data}/>

            <div className='disciplina-col'>

                <div className='disciplina-welcome'>
                    <span className='disciplina-title'>{disciplina}</span>
                    <span className='disciplina-subtitle'>{frase}</span>    
                               
                    <span className='disciplina-professores'>Professores:</span>

                    <div className='professores'>
                        {professores.map((professor) => {
                            return(
                                <div className='disciplina-professor'>
                                    <img src="" className='professor-avatar'/>
                                    <span className='professor-nome'>{professor}</span>
                                </div>
                            )
                        })}
                    </div>
                </div>

                <span className='intro'></span>
                        
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

/*

                <div className='assuntos'>
                    {assuntos.map((assunto, index) => {
                        return(
                            <div key={index}>
                                
                                <Assunto nome={assunto} conteudos={conteudo[assunto]} materia={disciplina}/>
                                    
                            </div> 
                        )
                    })}
                </div>


*/