import React from 'react';
import PropTypes from 'prop-types';

import { StatResult } from '../feed-back-styles.styled';

const  Statistic = ({good, neutral, bad, totalClicks, positivePercentage}) => (
    <StatResult>
        Good: {good}
        <br />
        Neutral: {neutral}
        <br />
        Bad: {bad}
        <br />
        Total: {totalClicks}
        <br />
        Positive Feedback: {positivePercentage}%
    </StatResult>
    )

Statistic.propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    totalClicks: PropTypes.number.isRequired,
    positivePercentage: PropTypes.number.isRequired

}

export default Statistic