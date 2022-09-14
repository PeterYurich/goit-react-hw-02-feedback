import React, { Component } from 'react';

import { FeedBack, Tittle, ButtonList, Button, StatResult } from './feed-back-page.styled';

export class FeedBackPage extends Component {
    static defaultProps = {
        goodInit: 0,
        neutralInit: 0,
        badInit: 0,
        totalInit: 0,
        positiveInit: 0,
    }

    // static propTypes = {}

    state = {
        good: this.props.goodInit,
        neutral: this.props.neutralInit,
        bad: this.props.badInit,
        total: this.props.totalInit,
        positive: this.props.positiveInit,
    }

    handleGood = () => {
        this.setState(prevState => ({
            good: prevState.good + 1
        }))
        this.countTotalFeedback()
        this.countPositiveFeedbackPercentage()
    };

    handleNeutral = () => {
        this.setState(prevState => ({
            neutral: prevState.neutral + 1
        }))
        this.countTotalFeedback()
        this.countPositiveFeedbackPercentage()
    }

    handleBad = () => {
        this.setState(prevState => ({
            bad: prevState.bad + 1
        }))
        this.countTotalFeedback()
        this.countPositiveFeedbackPercentage()
    }

    countTotalFeedback = () => {
        this.setState(prevState => ({
            total: prevState.total + 1
        }))
    }

    countPositiveFeedbackPercentage = () => {
        this.setState(prevState => ({
            positive:  100 * (prevState.good / prevState.total)
        }))
    }

    render() {
        return (
            <FeedBack>
                <Tittle>Please leave feedback</Tittle>
                <ButtonList>
                    <Button onClick={this.handleGood} >Good</Button>
                    <Button onClick={this.handleNeutral}>Neutral</Button>
                    <Button onClick={this.handleBad}>Bad</Button>
                </ButtonList>
                <Tittle>Statistics</Tittle>
                <StatResult good={this.good} neutral={this.neutral} bad={this.bad}
                    total={this.total} positivePercentage={this.good / this.total}>
                    Good: {this.state.good}
                    <br />
                    Neutral: {this.state.neutral}
                    <br />
                    Bad: {this.state.bad}
                    <br />
                    Total: {this.state.total}
                    <br />
                    Positive Feedback: {this.state.positive}%
                </StatResult>
            </FeedBack>
        )
    }
}