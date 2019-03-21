import React, { Component } from 'react'
import { Icon } from 'antd'
import './intro.css'

export default class Intro extends Component {
  render() {
    return (
      <div className="intro-comp">
        <div className="intro-container">
          <h1 className="intro-title">少形式，多思考{this.props.index}</h1>
          <p className="intro-author">
            蔡小民<span className="intro-seperate">/</span>ui&ux 设计师
          </p>
          <div className="intro-operations">
            <div className="intro-button">
              <Icon type="profile" className="intro-icon" />
              作品
            </div>
            <div className="intro-button">
              <Icon type="profile" className="intro-icon" />
              关于
            </div>
            <div className="intro-button">
              <Icon type="profile" className="intro-icon" />
              简历
            </div>
          </div>
        </div>
      </div>
    )
  }
}
