// Write your code here
import {Component} from 'react'

import {AiFillCheckCircle} from 'react-icons/ai'
import {RiErrorWarningFill} from 'react-icons/ri'
import {MdWarning, MdInfo} from 'react-icons/md'

import Notification from '../Notification/index'

import './index.css'

class AlertNotifications extends Component {
  render() {
    return (
      <div className="alert-notification-bg-container">
        <h1 className="main-heading">Alert Notifications</h1>
        <Notification>
          <AiFillCheckCircle className="notification-icon success" />
          <div className="notification-details-container">
            <h1 className="heading success">Success</h1>
            <p className="description">
              You can access all the files in the folder
            </p>
          </div>
        </Notification>
        <Notification>
          <RiErrorWarningFill className="notification-icon error" />
          <div className="notification-details-container">
            <h1 className="heading error">Error</h1>
            <p className="description">
              Sorry, you are not authorized to have access to delete the file
            </p>
          </div>
        </Notification>
        <Notification>
          <MdWarning className="notification-icon warning" />
          <div className="notification-details-container">
            <h1 className="heading warning">Warning</h1>
            <p className="description">
              Viewers of this file can see comments and suggestions
            </p>
          </div>
        </Notification>
        <Notification>
          <MdInfo className="notification-icon info" />
          <div className="notification-details-container">
            <h1 className="heading info">Info</h1>
            <p className="description">
              Anyone on the internet can view these files
            </p>
          </div>
        </Notification>
      </div>
    )
  }
}

export default AlertNotifications
