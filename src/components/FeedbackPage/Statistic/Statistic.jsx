import React from 'react';

import { StatResult } from '../feed-back-styles.styled';

export const  Statistic = ({good, neutral, bad, total, positivePercentage}) => (
    <StatResult>
        Good: {good}
        <br />
        Neutral: {neutral}
        <br />
        Bad: {bad}
        <br />
        Total: {total}
        <br />
        Positive Feedback: {positivePercentage}%
    </StatResult>
    )

