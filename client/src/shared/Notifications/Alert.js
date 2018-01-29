import React, { Component, Fragment } from 'react'
import { withAlert } from 'react-alert'


class Alert extends Component {
  
  componentWillMount() {
    const { strMessage, alertText,alertType,alert } = this.props;
    setTimeout(() => {
        if (alertType === "show") {
            alert.show(strMessage);
        } else if (alertType === "error") {
            alert.error(strMessage);
        } else {
            alert.success(strMessage);
        }
    });
  }
  
  render () {
    return <div/>
  }
}


export default withAlert(Alert)