import React from "react"

class Info extends React.Component {
  render () {
    var data = this.props.data;
    var name = data.name;
    var description = data.descri;

    return (
      React.createElement (
        "div",
        {className: "description-info"},
        React.createElement ("div", {className: "contact-img " + name}),
        React.createElement (
          "div",
          {className: "information"},
          description
        )
      )
    )
  }
}


export default Info;
