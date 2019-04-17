import React, { Component } from 'react';
import Fade from './Fade';

let num = 1;

class Dnd extends Component {

  constructor(props) {
    super(props);
    this.state = {
      inprop: false
    };
    this.btnClick = this.btnClick.bind(this);
  }

  render () {
    return (
      <div>
        <button onClick={this.btnClick}>点击transition</button>
        <Fade in={this.state.inprop}>
            ceshi weizhi {num}
        </Fade>
      </div>
    )
  }

  btnClick() {
    const { inprop } = this.state;
    this.setState({
      inprop: !inprop
    })
  }

}
// 效果是每次点击按钮都会进行一次进场和出场的动画。也可以自行衍生。

export default Dnd;