import React, { Component } from 'react';

class WorkTimer extends Component {
  state = {
    seconds: 0
  };

  componentDidMount() {
    this.timer = setInterval(() => {
      this.setState(prevState => ({ seconds: prevState.seconds + 1 }));
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  render() {
    return <div>Đã xem: {this.state.seconds} giây</div>;
  }
}

export default WorkTimer;