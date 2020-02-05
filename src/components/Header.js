import React from 'react';

const Header = () => {
    return (
        <div className="header">
            <div className="header__menu-icon">
                <span></span>
                <span></span>
                <span></span>
            </div>
            <div className="header__menu-name">
                <p>Class Management</p>
                <p>Attendance</p>
            </div>
            <div className="header__switch-catalog">
                <p className="active">Take attendance</p>
                <p >Attendance report</p>
            </div>
        </div>
    );
};

export default Header;
