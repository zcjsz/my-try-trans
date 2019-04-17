import React, { Component } from 'react';
import Board from './Board';
import Card from './Card';
import { Globalstyle, Container, Title, Button, StyledItem } from './style'

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      cards: []
    };
    this.addCard = this.addCard.bind(this);
    this.removeLastCard = this.removeLastCard.bind(this);
    this.removeCard = this.removeCard.bind(this)
  }

  render() {
    const { cards } = this.state;

    return (
      <Container>
        <Globalstyle/>
        <Title>React Transition Demo</Title>
        <Button onClick={this.addCard}>Add a card</Button>
        <Button onClick={this.removeLastCard}>Remove a card</Button>
        <Board>
          {
            cards.map((card) => {
              return (
                <StyledItem key={card.id}>
                  <Card onRemove={this.removeCard.bind(this, card.id)}>{ card.content }</Card>
                </StyledItem>
              )
            })
          }
        </Board>
      </Container>
    )
  }

  addCard () {
    const {cards} = this.state;
    const id = cards.length + 1;
    const newCard = {
      id,
      content: `Card ${id}`
    };
    this.setState({
      cards: cards.concat([newCard])
    })
  }

  removeLastCard () {
    const {cards} = this.state;
    this.setState({
      cards: cards.slice(0, -1)
    })
  }

  removeCard (id) {
    const {cards} = this.state;
    this.setState({
      cards: cards.filter(card => card.id !== id)
    })
  }

}

export default App;
