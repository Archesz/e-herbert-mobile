import React from 'react';

const Drawer = ({ isOpen, onClose, children }) => {
    return (
        <div className={`drawer ${isOpen ? 'open' : ''}`}>
            <div className="drawer-overlay" onClick={onClose} />
            <div className="drawer-content">{children}</div>
        </div>
    );
};

export default Drawer;
