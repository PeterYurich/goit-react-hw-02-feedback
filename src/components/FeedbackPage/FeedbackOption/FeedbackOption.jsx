import React from 'react';

import { ButtonList, Button } from '../feed-back-styles.styled';

export const FeedbackOption = ({options, onLeaveFeedback}) => (
  <ButtonList>
{    options.map((option, index) => (
        <Button onClick={onLeaveFeedback[index]}>{option}</Button>
    ))}

    {/* <Button  onClick={onGood}>Good</Button>
    <Button onClick={onNeutral}>Neutral</Button>
    <Button onClick={onBad}>Bad</Button> */}
  </ButtonList>
);
