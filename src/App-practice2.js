import React from 'react';
import PropTypes from 'prop-types';

class App extends React.Component {
  state = {
    count: 0,
  };
  add = () => {
    // this.setState({ count: this.state.count - 1 });
    // 위의 형태는 state (외부의 상태에 의존) 에 의존하고 있기에 좋은 활용이 아니다.
    this.setState((current) => ({ count: current.count + 1 }));
  };
  minus = () => {
    this.setState((current) => ({ count: current.count - 1 }));
  };
  componentDidMount() {
    console.log('component rendered');
  }
  componentDidUpdate() {
    console.log('updated');
  }
  // 컴포넌트가 사라질 때 호출된다.
  // componentWillUnmount() {
  //   console.log('Goodbye, cruel world');
  // }
  render() {
    console.log('rendering');
    return (
      <div>
        <h1>The number is: {this.state.count}</h1>
        <button onClick={this.add}>Add</button>
        <button onClick={this.minus}>Minus</button>
      </div>
    );
  }
}

export default App;
