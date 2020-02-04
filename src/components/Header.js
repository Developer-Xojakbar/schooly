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
                {/*this "active" class is error */}
                <div className="active">
                    <div className="container">
                        <p>Take attendance</p>
                        <p>Attendance report</p>
                    </div>
                </div>
                <p>Take attendance</p>
                <p>Attendance report</p>
            </div>
        </div>
    );
};

export default Header;
