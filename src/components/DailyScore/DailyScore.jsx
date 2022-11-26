import React from 'react';
import PropTypes from 'prop-types';
import './daily-score.scss';

/**
 * A component that displays the daily score percent of the user in a radial bar chart.
 * @param {number} scoreValue - The score value
 * @return {JSX.Element} - The component
 */
const DailyScore = ({scoreValue = 0}) => {
    return (
        <div className={"daily-score"}>
            <div className={"daily-score__title"}>Score</div>
            <div className={"daily-score__container"}>
                <div className="daily-score__progress">
                    <svg viewBox="0 0 100 100" fill="none">
                        <circle cx="50" cy="50" r="45" stroke="currentColor" strokeLinecap={"round"} strokeDashoffset={`${-285 + (285 * scoreValue)}%`}/>
                    </svg>
                </div>
                <p className={"daily-score__value"}><span>{scoreValue * 100}%</span><br/> de votre objectif</p>
            </div>
        </div>
    );
};

DailyScore.propTypes = {
    scoreValue: PropTypes.number.isRequired,
}

export default DailyScore;
