import React from 'react'
import './Evento.scss'
import {TbCalendarDue, TbLocationFilled} from "react-icons/tb"

function Evento(props) {
    return (
        <div className='evento-container'>
            
            <img src={props.foto} alt="" className="backgroundCard"/>

            <div className='evento-row'>

                <div className='evento-info'>
                    <TbCalendarDue className='icon'/>
                    <span className='evento-text'>{props.data}</span>
                </div>

                <div className='evento-info'>
                    <TbLocationFilled className="icon"/>
                    <span className='evento-text'>{props.tipo}</span>
                </div>

            </div>

            <div className='evento-infos'>
                <span className='evento-title'>{props.nome}</span>

                <span className='evento-text'>{props.descricao}</span>

            </div>

        </div>
    )
}

export default Evento