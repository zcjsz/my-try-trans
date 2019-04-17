import React from 'react';
import { StyledBoard } from './style';

function Board(props) {
  return (
    <StyledBoard>
      { props.children }
    </StyledBoard>
  )
}

export default Board;