import React from 'react'
import Conquista from '../Conquista/Conquista'
import './Perfil.scss'

import {TbBrandInstagram, TbBrandWhatsapp} from 'react-icons/tb'
import {TiSocialTwitter} from 'react-icons/ti'
import {BsDiscord} from 'react-icons/bs'

function goToLink(link){
    window.location.href(link, "_blank")
}

function Perfil(props) {
    
    let data = props.data
    let conquistas = data["Conquistas"]

    return (
        <div className='perfil-container'>

            <div className='perfil-top'>
                <div className='perfil-badge'>Estudante</div>

                <img src={data["URLFoto"]} className='perfil-photo' alt='Foto de Perfil'/>

                <div className='perfil-infos'>
                    <span className='perfil-name'>{data["Primeiro Nome"]}</span>
                    <span className='perfil-nickname'>{data["Apelido"]}</span>

                    <span className='perfil-course'>{data["Primeira Opção"]}</span>
                </div>

                <span className='perfil-turma'>Pixinguinha - Tarde</span>
                <span className='perfil-curso'>Vestibular</span>
            </div>

            <div className='divisor'></div>

            <div className='perfil-bottom'>
                
                <div className='perfil-row'>
                    
                        <TbBrandInstagram className='perfil-icon instagram' onClick={() => {goToLink(data["Social"]["Instagram"])}}/>
                        <TiSocialTwitter className='perfil-icon twitter' onClick={() => {goToLink(data["Social"]["Twitter"])}}/>
                        <TbBrandWhatsapp className='perfil-icon whatsapp' onClick={() => {goToLink(data["Social"]["Whatsapp"])}}/>

                </div>

                <button className='btn-perfil'>Perfil Completo</button>

            </div>


        </div>
    )
}

export default Perfil