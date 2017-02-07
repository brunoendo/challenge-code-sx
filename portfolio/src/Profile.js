import React from "react"
import Title from "./Title"

class Profile extends React.Component {
  render () {
    var data = this.props.data;
    var title = data.title;
    var description = data.description;
    return (
      React.createElement (
        "div",
        {className: "box-left profile"},
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

export default Profile;
