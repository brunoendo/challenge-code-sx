import React from "react"
import Title from "./Title"
import InfoTitle from "./InfoTitle"

class Education extends React.Component {
  render () {
    var data = this.props.data;
    var title = data.title;
    var firstLocation = data.university[0];
    var secondLocation = data.university[1];
    var thirdLocation = data.university[2];

    return (
      React.createElement (
        "div",
        {className: "box-right education"},
        <Title title={title}/>,
        React.createElement (
          "div",
          {className: "education-info"},
          <InfoTitle descri={firstLocation}/>,
          <InfoTitle descri={secondLocation}/>,
          <InfoTitle descri={thirdLocation}/>
        )
      )
    )
  }
}

export default Education;
