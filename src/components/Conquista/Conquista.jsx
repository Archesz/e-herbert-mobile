import React from 'react'
import './Conquista.scss'

function Conquista(props) {
    return (
        <div className='conquista-container'>
            
            <img src={props.image} alt={props.label} className="conquista-icon"/>
            <span className='conquista-name'>{props.name}</span>

        </div>
    )
}

export default Conquista