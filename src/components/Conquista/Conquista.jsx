import React from 'react'
import './Conquista.scss'

import badge from '../../assets/icones/hiking.png'

function Conquista(props) {

    return (
        <div className='conquista-container'>
            
            <img src={badge} className="icon" alt="" />
            <span className='conquista-name'>{props.name}</span>

        </div>
    )
}

export default Conquista