import React, { useState } from 'react';
import './Conquista.scss';

import badge from '../../assets/icones/hiking.png';

function Conquista(props) {
    const [modalOpen, setModalOpen] = useState(false);

    const handleClick = (value) => {
        setModalOpen(value);
    };

    return (
        <>
            <div className="conquista-container" onClick={() => {handleClick(true)}}>
                <img src={badge} className="icon" alt="" />
                <span className="conquista-name">{props.name}</span>
            </div>

            {modalOpen && (
                <div className="modal" onClick={() => {handleClick(false)}}>
                    <div className="modal-content">
                        <img src={badge} className="badge" alt="" />

                        <p className='modal-name'>{props.name}</p>
                        
                        <p className='modal-text'>{props.text}</p>
                    </div>
                </div>
            )}
        </>
    );
}

export default Conquista;
