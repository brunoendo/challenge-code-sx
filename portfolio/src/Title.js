import React from "react"

class Title extends React.Component {
  render () {
    var title = this.props.title;
    return (
      React.createElement (
        "div",
        {className: "head"},
        React.createElement ("div", {className: "logo"}),
        React.createElement (
          "div",
          {className: "title"},
          title
        )
      )
    )
  }
}

export default Title;

