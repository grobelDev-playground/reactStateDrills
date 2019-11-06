import React from "react";

class HelloWorld extends React.Component {
  state = {
    who: "Null"
  };
  handleButtonClick = noun => {
    const newName = noun;
    this.setState({
      who: newName
    });
  };
  render() {
    return (
      <div>
        <p>Hello {this.state.who}</p>
        <button onClick={() => this.handleButtonClick("Friend")}>Friend</button>
        <button onClick={() => this.handleButtonClick("React")}>React</button>
        <button onClick={() => this.handleButtonClick("World")}>World</button>
      </div>
    );
  }
}

export default HelloWorld;
