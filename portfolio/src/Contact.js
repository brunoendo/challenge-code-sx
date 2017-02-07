import React from "react"
import Title from "./Title"
import Info from "./Info"

class Contact extends React.Component {
  render () {
    var data = this.props.data;
    var title = data.title;
    var address = {name: "address", descri: data.address};
    var tel = {name: "tel", descri: data.tel};
    var email = {name: "email", descri: data.email};
    var webSite = {name: "webSite", descri: data.webSite};

    return (
      React.createElement (
        "div",
        {className: "box-left contact-me"},
        <Title title={title}/>,
        React.createElement (
          "div",
          {className: "info"},
          <Info data={address}/>,
          <Info data={tel}/>,
          <Info data={email}/>,
          <Info data={webSite}/>
        )
      )
    )
  }
}

export default Contact;
