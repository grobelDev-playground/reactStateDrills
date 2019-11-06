import React from "react";

// Meant for testing...
const sections = [
  {
    title: "Section 1",
    content: "Lorem ipsum dolor sit amet consectetur adipisicing elit."
  },
  {
    title: "Section 2",
    content:
      "Cupiditate tenetur aliquam necessitatibus id distinctio quas nihil ipsam nisi modi!"
  },
  {
    title: "Section 3",
    content:
      "Animi amet cumque sint cupiditate officia ab voluptatibus libero optio et?"
  }
];

class Accordian extends React.Component {
  constructor(props) {
    console.log("props in constructor", props);
    super(props);
    // console.log(this.props.bulletInChamber || 8);
    this.state = {
      sections: this.props.sections || sections,
      stateObj: {}
    };
  }
  handleButtonClick = sectionTitle => {
    // console.log(sectionTitle);
    let stateObj = sectionTitle;
    // stateObj = ;
    this.setState({
      stateObj: sectionTitle
    });
  };
  renderContent(sectionTitle) {
    let content = "";

    if (this.state.stateObj === sectionTitle && sectionTitle === "Section 1") {
      // console.log("Section 1 === true");
      content = this.state.sections[0].content;
    } else if (
      this.state.stateObj === sectionTitle &&
      sectionTitle === "Section 2"
    ) {
      content = this.state.sections[1].content;
    } else if (
      this.state.stateObj === sectionTitle &&
      sectionTitle === "Section 3"
    ) {
      content = this.state.sections[2].content;
    }

    return <p>{content}</p>;
  }
  render() {
    let content = "";

    if (this.state.stateObj["Section 1"] === true) {
      console.log("Section 1 === true");
      content = this.state.sections[0].content;
    }

    return (
      <ul>
        {this.state.sections.map(section => (
          <li>
            <button onClick={() => this.handleButtonClick(section.title)}>
              {section.title}
            </button>
            {this.renderContent(section.title)}
          </li>
        ))}
      </ul>
    );
  }
}

export default Accordian;
