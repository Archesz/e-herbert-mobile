import React, { useState } from 'react'
import '../styles/eventos.scss'
import Menu from '../components/Menu/Menu'
import Evento from '../components/Evento/Evento'

const eventosNow = [
    {"Nome": "Pré-Vestibular", "Foto": "https://img.r7.com/images/vestibular-800-02042018065422119?dimensions=660x360&&amp;&amp;&amp;&amp;&amp;&amp;&amp;&amp;&amp;&amp;resize=660x360&amp;crop=661x360+22+0", 
    "Data": "01/03 a 15/12", "Tipo": "Presencial", 
    "Descrição": "Este curso pré-vestibular gratuito foi criado para quem deseja se preparar para os vestibulares mais concorridos do país, como UNICAMP, USP e UNESP. Desenvolvido por profissionais experientes, o curso é destinado a estudantes que buscam uma base sólida e consistente em todas as áreas do conhecimento. Com ele, você poderá ampliar seus horizontes e se preparar para as mais diversas oportunidades que o ensino superior pode oferecer. Além disso, o curso pré-vestibular é uma ótima opção para quem deseja ingressar em uma universidade de qualidade e alcançar salários iniciais atrativos."},
    {"Nome": "Pré-Técnico", "Foto": "https://img.freepik.com/fotos-gratis/menina-sorridente-na-biblioteca-estudando-e-usando-o-laptop_23-2148448033.jpg?w=2000", 
    "Data": "01/03 a 15/12", "Tipo": "Presencial", 
    "Descrição": "Este cursinho pré-técnico foi desenvolvido para preparar estudantes que desejam ingressar em instituições técnicas renomadas, como Cotuca, ETEC e SENAI. Com aulas ministradas por profissionais experientes, o curso oferece uma base sólida e consistente em todas as áreas do conhecimento técnico. Aqui, você poderá desenvolver suas habilidades e conhecimentos em diversas áreas, incluindo tecnologia, engenharia, ciências e muito mais. O objetivo é garantir que você esteja preparado para as provas de seleção das melhores instituições técnicas do país."}
]

const eventosNext = [
    {"Nome": "Concurso Público", "Foto": "data:image/jpeg;base64,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", 
    "Data": "10/04 a 08/08", "Tipo": "Presencial", 
    "Descrição": "Este curso preparatório foi desenvolvido especialmente para quem busca se preparar para concursos públicos. Com aulas ministradas por profissionais experientes, o curso oferece uma ampla gama de conhecimentos e técnicas para que você possa se destacar em provas de concursos públicos. O curso abrange diversas áreas do conhecimento, como língua portuguesa, matemática, direito, administração, entre outras. Além disso, o curso oferece simulados e exercícios para que você possa se preparar da melhor maneira possível. Com o curso preparatório, você estará apto a enfrentar as provas com confiança e segurança, e estará mais próximo de conquistar a tão sonhada vaga no setor público."}
]


function Eventos(props) {

    const objetoSerializado = localStorage.getItem("HerbertData");
    const data = JSON.parse(objetoSerializado)[0];

    const [search, setSearch] = useState("")

    return (
        <div className='eventos-container'>

            <Menu data={data}/>

            <div className='eventos-header'>

                <input placeholder='Buscar evento'/>

            </div>

            <span className='eventos-text'>Acontecendo agora &#x1F525;</span>

            {eventosNow.map((evento) => {
                return(
                    <Evento nome={evento["Nome"]} data={evento["Data"]} foto={evento["Foto"]} tipo={evento["Tipo"]}
                    descricao={evento["Descrição"]}
                    />                    
                )
            })}

            <span className='eventos-text'>Em breve &#x1F4C5;</span>

            {eventosNext.map((evento) => {
                return(
                    <Evento nome={evento["Nome"]} data={evento["Data"]} foto={evento["Foto"]} tipo={evento["Tipo"]}
                    descricao={evento["Descrição"]}
                    />                    
                )
            })}

        </div>
    )
}

export default Eventos