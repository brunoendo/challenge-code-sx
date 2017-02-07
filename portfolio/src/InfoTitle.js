import React from "react"
import Description from "./Description"

class InfoTitle extends React.Component {
  render () {
    var descri = this.props.descri;
    var localization = descri.universityName + ", " +
                       descri.universityCity;
    var title = {
      month: descri.month,
      year: descri.year,
      name: descri.courseName,
      localization: localization,
      description: descri.description
    }

    return (
      React.createElement (
        "div",
        null,
        <Description data={title}/>
      )
    )
  }
}

export default InfoTitle;
