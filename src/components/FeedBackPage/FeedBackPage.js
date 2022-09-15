import React, { Component } from 'react';

import { FeedBack } from './feed-back-styles.styled';
import { Statistic } from './Statistic/Statistic';
import { FeedbackOption } from './FeedbackOption/FeedbackOption';
import { Section } from './Section/Section';
import { Notification } from './Notification/Notification';

export class FeedbackPage extends Component {
    static defaultProps = {
        goodInit: 0,
        neutralInit: 0,
        badInit: 0,
    }

    state = {
        good: this.props.goodInit,
        neutral: this.props.neutralInit,
        bad: this.props.badInit,
    }

    handleGood = () => {
        this.setState(prevState => ({
            good: prevState.good + 1
        }));
    };

    handleNeutral = () => {
        this.setState(prevState => ({
            neutral: prevState.neutral + 1
        }));
    }

    handleBad = () => {
        this.setState(prevState => ({
            bad: prevState.bad + 1
        }));
    }

    countTotalFeedback = () => (
        this.state.good + this.state.neutral + this.state.bad
    )

    countPositiveFeedbackPercentage = (totalClicks) => (
        Math.round(100 * (this.state.good / totalClicks))
    )

    render() {
        const { good, neutral, bad } = this.state;
        const totalClicks = this.countTotalFeedback()
        const positivePercentage = this.countPositiveFeedbackPercentage(totalClicks)

        return (
            <FeedBack>
                <Section title='Please leave feedback'                >
                    <FeedbackOption
                        options={[
                            'Good', 'Neutral', 'Bad'
                        ]}
                        onLeaveFeedback={[
                            this.handleGood,
                            this.handleNeutral,
                            this.handleBad
                        ]}
                    />
                </Section>

                {totalClicks === 0 && <Notification message='There is no feedback'></Notification>}

                {totalClicks > 0 &&
                    <Section title='Statistics'>
                        <Statistic
                            good={good} neutral={neutral} bad={bad}
                            totalClicks={totalClicks}
                            positivePercentage={positivePercentage}
                        />
                    </Section>
                }
            </FeedBack>
        )
    }
}