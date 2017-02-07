import React from "react";

class Cover extends React.Component {
  render () {
    var data = this.props.data;
    var thumb =  data.thumb;
    var name = data.name;
    var profession = data.profession;

    return (
      React.createElement (
        "div",
        {className: "box-left cover"},
          <div className="photo" style={{background: "url("+thumb+") center center"}}></div>,
        React.createElement (
          "div",
          {className: "name-profession"},
          React.createElement (
            "h2",
            null,
            name
          ),
          React.createElement (
            "h3",
            null,
            profession
          )
        )
      )
    )
  }
}

export default Cover;
