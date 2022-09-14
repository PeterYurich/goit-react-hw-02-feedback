import React from 'react';

import { ButtonList, Button } from '../feed-back-page.styled';

export const FeedbackOption = ({onGood, onNeutral, onBad}) => (
  <ButtonList>
    <Button onClick={onGood}>Good</Button>
    <Button onClick={onNeutral}>Neutral</Button>
    <Button onClick={onBad}>Bad</Button>
  </ButtonList>
);
