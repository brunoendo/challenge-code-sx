import React from "react"
import Title from "./Title"
import InfoExp from "./InfoExp"

class Experience extends React.Component {
  render () {
    var data = this.props.data;
    var title = data.title;
    var firstLocation = data.company[0];
    var secondLocation = data.company[1];
    var thirdLocation = data.company[2];

    return (
      React.createElement (
        "div",
        {className: "box-right experience"},
        <Title title={title}/>,
        React.createElement (
          "div",
          {className: "experience-description"},
          <InfoExp descri={firstLocation}/>,
          <InfoExp descri={secondLocation}/>,
          <InfoExp descri={thirdLocation}/>
        )
      )
    )
  }
}

export default Experience;
          
