import React from "react";

class RouletteGun extends React.Component {
  constructor(props) {
    // console.log("props in constructor", props);
    super(props);
    // console.log(this.props.bulletInChamber || 8);
    this.state = {
      chamber: null,
      spinningTheChamber: false,
      bulletInChamber: this.props.bulletInChamber || 8
    };
  }
  componentDidMount() {
    // console.log("componentDidMount");
  }

  handleButtonClick = () => {
    this.setState({
      spinningTheChamber: true
    });
    setTimeout(() => {
      let randomNumber = Math.ceil(Math.random() * 8);
      this.setState({
        chamber: randomNumber,
        spinningTheChamber: false
      });
    }, 2000);
  };

  render() {
    let stateText = "default";
    if (this.state.spinningTheChamber) {
      stateText = "spinning the chamber and pulling the trigger!";
    } else if (this.state.chamber === this.state.bulletInChamber) {
      stateText = "BANG!!!!";
    } else {
      stateText = `you're safe!`;
    }

    return (
      <div>
        {/* <p>{this.props.bulletInChamber || 7}</p> */}
        <p>bulletInChamber: {this.state.bulletInChamber}</p>
        <p>chamber: {this.state.chamber}</p>
        <p>{stateText}</p>
        <button onClick={() => this.handleButtonClick()}>
          Pull the trigger!
        </button>
      </div>
    );
  }
}

export default RouletteGun;
