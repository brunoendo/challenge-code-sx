import React from "react"
import Title from "./Title"

class Objective extends React.Component {
  render () {
    var data = this.props.data;
    var title = data.title;
    var description = data.description;

    return (
      React.createElement (
        "div",
        {className: "box-left objective"},
        <Title title={title}/>,
        React.createElement (
          "div",
          {className: "description-text"},
          React.createElement (
            "p",
            null,
            description
          )
        )
      )
    )
  }
}


export default Objective;
