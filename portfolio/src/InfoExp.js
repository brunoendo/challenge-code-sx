import React from "react"
import Description from "./Description"

class InfoExp extends React.Component {
  render () {
    var descri = this.props.descri;
    var localization = descri.companyName + ", " +
                       descri.companyCity;
    var title = {
      month: descri.month,
      year: descri.year,
      name: descri.roleName,
      localization: localization,
      description: descri.description
    }

    return (
      React.createElement (
        "div",
        {className: "experience-info"},
        <Description data={title}/>
      )
    )
  }
}

export default InfoExp;
