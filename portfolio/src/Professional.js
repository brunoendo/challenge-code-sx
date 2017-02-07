import React from "react"
import Title from "./Title"
import Skill from "./Skill"

class Professional extends React.Component {
  render () {
    var data = this.props.data;
    var title = data.title;
    var firstSkill = {name: data.tools[0].toolName,
                      value: data.tools[0].toolsSkill};

    var secondSkill = {name: data.tools[1].toolName,
                      value: data.tools[1].toolsSkill};

    var thirdSkill = {name: data.tools[2].toolName,
                      value: data.tools[2].toolsSkill};

    return (
      React.createElement (
        "div",
        {className: "box-right professional-skill"},
        <Title title={title}/>,
        React.createElement (
          "div",
          {className: "skills"},
          <Skill descri={firstSkill}/>,
          <Skill descri={secondSkill}/>,
          <Skill descri={thirdSkill}/>
        )
      )
    )
  }
}


export default Professional;

