import React from "react";

class Bomb extends React.Component {
  state = {
    count: 0
  };
  componentDidMount() {
    this.interval = setInterval(() => {
      let newCount = this.state.count + 1;
      this.setState({
        count: newCount
      });
    }, 1000);
  }
  render() {
    let count = this.state.count;
    let bombState = "";
    // console.log(count);

    if (count >= 8) {
      bombState = "BOOM!!!";
      clearInterval(this.interval);
    } else if (count % 2 === 0) {
      bombState = "tick";
    } else if (count % 2 === 1) {
      bombState = "tock";
    }

    return (
      <div>
        <p>{this.state.count}</p>
        <p>{bombState}</p>
      </div>
    );
  }
}

export default Bomb;
