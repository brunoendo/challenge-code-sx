import React from "react";
import Cover from "./Cover"
import Profile from "./Profile"
import Objective from "./Objective"
import Personal from "./Personal"
import Contact from "./Contact"
import Education from "./Education"
import Experience from "./Experience"
import Professional from "./Professional"
import Award from "./Award"
import "./App.sass";


class Request extends React.Component {
  constructor (props) {
    super (props)
    this.state = {
      data: {}
    };
  }

  componentDidMount () {
    fetch ('http://www.mocky.io/v2/57dfec211000009020598073')
      .then ((response) => response.json())
      .then ((responseJSON) => {
        this.setState({ data: responseJSON });
      })
      .catch ((error) => {
        console.warn(error);
      });
  }

  render () {
    if (this.state.data.profile) {// procurar por funcao se o objeto tem filho
      return (
        React.createElement(
          "div",
          {className: "container"},
          React.createElement (
            "div",
            {className: "col-left"},
            <Cover data={this.state.data}/>,
            <Profile data={this.state.data.profile}/>,
            <Objective data={this.state.data.objective}/>,
            <Personal data={this.state.data.personalSkill}/>,
            <Contact data={this.state.data.contactMe}/>
          ),
          React.createElement (
            "div",
            {className: "col-right"},
            <Education data={this.state.data.education}/>,
            <Experience data={this.state.data.experience}/>,
            <Professional data={this.state.data.professionalSkill}/>,
            <Award data={this.state.data.award}/>
          )
        )
      )
    } else {
      return null;
    }
  }
}

export default Request;
