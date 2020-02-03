import React from 'react';
import sprite from '../images/sprite.svg';

const IconSVG = ({ iconName, className }) => {
    return (
        <svg className={`icon ${className}`}>
            <use xlinkHref={`${sprite}#${iconName}`} />
        </svg>
    );
};

export default IconSVG;
