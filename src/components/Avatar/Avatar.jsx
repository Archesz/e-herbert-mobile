import React, { useState, useEffect, useRef } from 'react';
import './Avatar.scss';

function Avatar(props) {
    const [isOpen, setIsOpen] = useState(false);
    const avatarRef = useRef(null);

    useEffect(() => {
        function handleClickOutside(event) {
            if (avatarRef.current && !avatarRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        }
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [avatarRef]);

    function handleToggle() {
        setIsOpen(!isOpen);
    }

    return (
        <div className="circle-menu" ref={avatarRef}>
            <img className="circle" onClick={handleToggle} src={props.url} alt="Icone do Avatar" />
            {isOpen && (
                <ul className="menu">
                    <li>Perfil</li>
                    <li>Configurações</li>
                    <li>Sair</li>
                </ul>
            )}
        </div>
    );
}

export default Avatar;