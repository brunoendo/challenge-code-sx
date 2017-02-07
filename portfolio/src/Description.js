import React from "react"

class Description extends React.Component {
  render () {
    var data = this.props.data;

    return (
      React.createElement (
        "div",
        {className: "title-description"},
        React.createElement (
          "div",
          {className: "date"},
          React.createElement (
            "h3",
            null,
            data.month
          ),
          React.createElement (
            "h3",
            null,
            data.year
          )
        ),
        React.createElement (
          "div",
          {className: "description"},
          React.createElement (
            "div",
            {className: "descri-title"},
            React.createElement (
              "h2",
              null,
              data.name
            )
          ),
          React.createElement (
            "div",
            {className: "descri-localization"},
            React.createElement (
              "h3",
              null,
              data.localization
            )
          ),
          React.createElement (
            "div",
            {className: "descri-description"},
            React.createElement (
              "p",
              null,
              data.description
            )
          )
        )
      )
    )
  }
}

export default Description;
