import React, {Component} from 'react'

import { StatResult } from '../feed-back-styles.styled'

export class Statistic extends Component {

    render() {
        return (
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
}}


