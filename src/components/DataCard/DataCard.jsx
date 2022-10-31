import React from 'react';
import './data-card.scss';

const DataCard = ({icon, value, name, className}) => {
    return (
        <div className={"data-card"}>
            <div className="data-card__container">
                <div className={`data-card__icon ${className}`}>
                    {icon}
                </div>
                <p className="data-card__details">
                    <span className={"data-card__value"}>{value}</span>
                    <span className={"data-card__label"}>{name}</span>
                </p>
            </div>
        </div>
    );
};

export default DataCard;
