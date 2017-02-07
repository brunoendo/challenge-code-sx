import React from "react"

class Skill extends React.Component {
  render () {
    var descri = this.props.descri;
    var name = descri.name;
    var value = descri.value;

    return (
      React.createElement (
        "div",
        {className: "description-skill"},
        React.createElement (
          "div",
          {className: "skill"},
          name
        ),
        <div className="value-container">
          <div className="value" ref="skill" style={{width: value+"%"}}></div>
        </div>
      )

    )
  }
}

export default Skill;
