import React from 'react';
import PropTypes from 'prop-types';

import { ButtonList, Button } from '../feed-back-styles.styled';

export const FeedbackOption = ({ options, onLeaveFeedback }) => (
  <ButtonList>
    {options.map((option, index) => (
      <Button key={option} onClick={onLeaveFeedback[index]}>
        {option}
      </Button>
    ))}

    {/* <Button  onClick={onGood}>Good</Button>
    <Button onClick={onNeutral}>Neutral</Button>
    <Button onClick={onBad}>Bad</Button> */}
  </ButtonList>
);

FeedbackOption.propTypes = {
  option: PropTypes.arrayOf(PropTypes.string.isRequired),
  onLeaveFeedback: PropTypes.arrayOf(PropTypes.func.isRequired),
};