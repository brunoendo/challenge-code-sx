import React from "react"
import Title from "./Title"
import Skill from "./Skill"

class Personal extends React.Component {
  render () {
    var data = this.props.data;
    var title = data.title;
    var firstSkill = {name: "management", value: data.management};
    var secondSkill = {name: "teamWork", value: data.teamWork};
    var thirdSkill = {name: "creative", value: data.creative};
    var fourthSkill = {name: "communication", value: data.communication};

    return (
      React.createElement (
        "div",
        {className: "box-left personal-skill"},
        <Title title={title}/>,
        React.createElement (
          "div",
          {className: "skills"},
          <Skill descri={firstSkill}/>,
          <Skill descri={secondSkill}/>,
          <Skill descri={thirdSkill}/>,
          <Skill descri={fourthSkill}/>
        )
      )
    )
  }
}

export default Personal;
