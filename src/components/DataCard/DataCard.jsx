import React from 'react';
import PropTypes from 'prop-types';
import './data-card.scss';

/**
 * A component that displays a data card with a theme color and an icon.
 *
 * @param {JSX.Element} icon - The html code of the icon.
 * @param {number} value - The value of the data.
 * @param {string} name - The name of the data.
 * @param {string} className - A class name to set the color of the icon and his background.
 * @return {JSX.Element}
 */
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

DataCard.propTypes = {
    icon: PropTypes.element.isRequired,
    value: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    className: PropTypes.string.isRequired,
}

export default DataCard;
