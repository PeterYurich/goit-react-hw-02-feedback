import React, { Component } from 'react';

import { FeedBack } from './feed-back-page.styled';
import { Statistic } from './Statistic/Statistic';
import { FeedbackOption } from './FeedbackOption/FeedbackOption';
import { Section } from './Section/Section'

export class FeedbackPage extends Component {
    static defaultProps = {
        goodInit: 0,
        neutralInit: 0,
        badInit: 0,
        totalInit: 0,
        positivePercentageInit: 0,
    }

    // static propTypes = {}

    state = {
        good: this.props.goodInit,
        neutral: this.props.neutralInit,
        bad: this.props.badInit,
        total: this.props.totalInit,
        positivePercentage: this.props.positivePercentageInit,
    }

    handleGood = () => {
        this.setState(prevState => ({
            good: prevState.good + 1
        }));
        this.countTotalFeedback()
        this.countPositiveFeedbackPercentage()
    };

    handleNeutral = () => {
        this.setState(prevState => ({
            neutral: prevState.neutral + 1
        }));
        this.countTotalFeedback()
        this.countPositiveFeedbackPercentage()
    }

    handleBad = () => {
        this.setState(prevState => ({
            bad: prevState.bad + 1
        }));
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
            positivePercentage: Math.round(100 * (prevState.good / prevState.total))
        }))
    }

    render() {
        return (
            <FeedBack>
                <Section title='Please leave feedback'
                    >
                    <FeedbackOption
                        onGood={this.handleGood}
                        onNeutral={this.handleNeutral}
                        onBad={this.handleBad}
                    />
                </Section>

                <Section title='Statistics'>
                    <Statistic
                        good={this.state.good} neutral={this.state.neutral} bad={this.state.bad}
                        total={this.state.total} positivePercentage={this.state.positivePercentage}
                    />
                </Section>

            </FeedBack>
        )
    }
}