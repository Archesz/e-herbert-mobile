import React from 'react'
import Conquista from '../Conquista/Conquista'
import './Perfil.scss'

import {TbBrandInstagram, TbBrandWhatsapp} from 'react-icons/tb'
import {TiSocialTwitter} from 'react-icons/ti'
import {BsDiscord} from 'react-icons/bs'

function Perfil(props) {
    
    let data = props.data
    let conquistas = data["Conquistas"]

    return (
        <div className='perfil-container'>

            <div className='perfil-top'>
                <div className='perfil-badge'>Estudante</div>

                <img src={data["URLFoto"]} className='perfil-photo' alt='Foto de Perfil'/>

                <div className='perfil-infos'>
                    <span className='perfil-name'>João Vitor</span>
                    <span className='perfil-nickname'>Jovi</span>

                    <span className='perfil-course'>Ciência da Computação</span>
                </div>

                <span className='perfil-turma'>Pixinguinha - Tarde</span>
                <span className='perfil-curso'>Vestibular</span>
            </div>

            <div className='divisor'></div>

            <div className='perfil-bottom'>

                <span className='perfil-title'>Contato</span>
                
                <div className='perfil-row'>
                    
                        <TbBrandInstagram className='perfil-icon instagram' onClick={() => {window.location.href(data["Social"]["Instagram"], "_blank")}}/> 
                        <TiSocialTwitter className='perfil-icon twitter' onClick={() => {window.location.href(data["Social"]["Twitter"], "_blank")}}/>
                        <TbBrandWhatsapp className='perfil-icon whatsapp' onClick={() => {window.location.href(data["Social"]["Whatsapp"], "_blank")}}/> 

                </div>

                <span className='perfil-title mt-4'>Conquistas</span>
                
                <div className='perfil-row'>
                    
                    {conquistas.map((conquista) => {
                        return(
                            <Conquista name={conquista["Nome"]} image={conquista["URL"]}/>
                        )
                    })}

                </div>
                <span className='btn-more'>Ver todas</span>

            </div>


        </div>
    )
}

export default Perfil