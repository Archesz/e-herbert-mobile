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
    "Descrição": "Este cursinho pré-técnico foi desenvolvido para preparar estudantes que desejam ingressar em instituições técnicas renomadas, como Cotuca, ETEC e SENAI. Com aulas ministradas por profissionais experientes, o curso oferece uma base sólida e consistente em todas as áreas do conhecimento técnico. Aqui, você poderá desenvolver suas habilidades e conhecimentos em diversas áreas, incluindo tecnologia, engenharia, ciências e muito mais. O objetivo é garantir que você esteja preparado para as provas de seleção das melhores instituições técnicas do país."},
    {"Nome": "Concurso Público", "Foto": "", 
    "Data": "01/04 - 01/06", "Tipo": "Presencial", 
    "Foto": "https://boa-prova.com/wp-content/uploads/2023/01/o-que-estudar-para-concurso-publico.png.webp",
    "Descrição": "Este curso preparatório foi desenvolvido especialmente para quem busca se preparar para concursos públicos. Com aulas ministradas por profissionais experientes, o curso oferece uma ampla gama de conhecimentos e técnicas para que você possa se destacar em provas de concursos públicos. O curso abrange diversas áreas do conhecimento, como língua portuguesa, matemática, direito, administração, entre outras. Além disso, o curso oferece simulados e exercícios para que você possa se preparar da melhor maneira possível. Com o curso preparatório, você estará apto a enfrentar as provas com confiança e segurança, e estará mais próximo de conquistar a tão sonhada vaga no setor público."},
]

const eventosNext = [
    {"Nome": "Curso de Tecnologia", "Data": "Em breve", "Tipo": "Presencial",
    "Foto": "https://previews.123rf.com/images/peshkov/peshkov1905/peshkov190500374/128578729-abstract-glowing-circuit-coding-background-programming-and-technology-concept-3d-rendering.jpg",
    "Descrição": "Curso de introdução a tecnologia, ensinando sobre como utilizar e se apropriar da tecnologia a nosso favor. Iniciação em lógica computacional e programação iniciante. Apresentação de ferramentas como ChatGPT, OpenAI, Dall-E 2, MidJourney, Authezier. Como criar e implementar uma inteligência artificial. Introdução à Robótica e Inteligencia das Coisas (IoT)."}
]


function Eventos(props) {

    const objetoSerializado = localStorage.getItem("HerbertData");
    const data = JSON.parse(objetoSerializado)[0];

    const [search, setSearch] = useState("")

    function changeSearch(){
        let value = document.querySelector("#eventosFilter").value
        setSearch(value)
    }

    return (
        <div className='eventos-container'>

            <Menu data={data}/>

            <div className='eventos-header'>
                <span className='eventos-name'>Eventos e Cursos</span>
                <input placeholder='Buscar evento' onChange={() => {changeSearch()}} id="eventosFilter" className='eventos-input'/>

            </div>

            <span className='eventos-text'>Acontecendo agora &#x1F525;</span>

            {eventosNow.map((evento) => {
                if(evento["Nome"].includes(search) != false){
                    return(
                        <Evento nome={evento["Nome"]} data={evento["Data"]} foto={evento["Foto"]} tipo={evento["Tipo"]}
                        descricao={evento["Descrição"]}
                        />                    
                    )
                }
            })}

            <span className='eventos-text'>Em breve &#x1F4C5;</span>

            {eventosNext.map((evento) => {
                if(evento["Nome"].includes(search) != false){
                    return(
                        <Evento nome={evento["Nome"]} data={evento["Data"]} foto={evento["Foto"]} tipo={evento["Tipo"]}
                        descricao={evento["Descrição"]}
                        />                    
                    )
                }
            })}

        </div>
    )
}

export default Eventos