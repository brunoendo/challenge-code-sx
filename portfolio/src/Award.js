import React from "react"
import Title from "./Title"
import Description from "./Description"

class Award extends React.Component {
  render () {
    var data = this.props.data;
    var title = data.title;
    var localization = data.projectName + ", " +
                       data.city;
    var info = {
        month: data.month,
        year: data.year,
        name: data.awardName,
        localization: localization,
        description: data.description
    }

    return (
      React.createElement (
        "div",
        {className: "box-right award"},
        <Title title={title}/>,
        React.createElement (
          "div",
          {className: "award-info"},
          <Description data={info}/>
        )
      )
    )
  }
}

export default Award;

