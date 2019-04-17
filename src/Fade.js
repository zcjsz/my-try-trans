import React, { Component } from 'react';
import { Transition } from 'react-transition-group';

//自己简单的封装了一个，该有的参数都由了，可以自行粘贴在自己的代码里面去试试。
class Fade extends Component {

  done =() => {
    console.log('结束了')
  };

  addaddEndListener = (node) => { //原生时间transition运动的事件
    node.addEventListener('transitionend', this.done, false);
  };

  // 三个进入状态的事件，可以做你想做的事情
  onEnter = (node, isAppearing) => {
    console.log('onEnter isAppearing', isAppearing);
    console.log('onEnter node', node);
  };
  onEntering = (node, isAppearing) => {
    console.log('onEntering isAppearing', isAppearing);
    console.log('onEntering node', node);
  };
  onEntered = (node, isAppearing) => {
    console.log('onEntered isAppearing', isAppearing);
    console.log('onEntered node', node);
  };

  // 三个退出的状态的事件
  onExit = (node) => {
    console.log('onExit node', node)
  };
  onExiting = (node) => {
    console.log('onExiting node', node)
  };
  onExited = (node) => {
    console.log('onExited node', node);
  };

  render() {
    const { in: inProp} = this.props;
    const defaultStyle = {
      transition: `transform ${300}ms ease-in-out, opacity ${300}ms ease-in-out`,
      transform: 'translateX(100px)',
      opacity: '0'
    };

    const transitionStyles = {
      entering: { transform: 'translateX(100px)', opacity: '0'},
      entered:  { transform: 'translateX(0px)', opacity: '1' },
      exiting: {transform: 'translateX(0px)', opacity: '1'},
      exited: {transform: 'translateX(100px)', opacity: '0'}
    };
    const duration = {
      enter: 300,
      exit: 300,
    };
    // 上面的都是基本参数，样式的转变以及时间的设定，具体的可以看官网文档
    // 样式也可以写成className 例如<MyComponent className={`fade fade-${status}`} />
    return (
      <Transition
        onEnter={this.onEnter}
        onEntering={this.onEntering}
        onEntered={this.onEntered}

        onExit={this.onExit}
        onExiting={this.onExiting}
        onExited={this.onExited}

        in={inProp}
        addEndListener={this.addaddEndListener}
        unmountOnExit={false} // 为true 代表退出的时候移除dom
        appear={true} // 为true  渲染的时候就直接执行动画，默认false，
        timeout={duration}
      >
        {
          state => {
            console.log(state, '###'); //你可以很直观的看到组件加载和卸载时候的状态
            return(
              <div style={{
                ...defaultStyle,
                ...transitionStyles[state]
              }}>
                {this.props.children}
              </div>
            )
          }
        }
      </Transition>
    );
  }
}

export default Fade;