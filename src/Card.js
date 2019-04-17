import React from 'react';
import { Button, StyledCard } from './style';

function Card(props) {
  return (
    <StyledCard>
      { props.children }
      <Button onClick={props.onRemove}>Remove</Button>
    </StyledCard>
  )
}

export default Card;