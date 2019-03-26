import React, { Component } from 'react'
import './workItem.css'
import workCover from 'asset/images/work_1.png'
export default class Works extends Component {
  render() {
    return (
      <div className={this.props.className + ' work-item'}>
        <img
          src={workCover}
          alt=""
          className="work-cover"
        />
        <div className="work-title">KW改版与设计{this.props.index}</div>
        <div className="work-info">
          app<span className="info-seperate">/</span>July 22,2018
        </div>
      </div>
    )
  }
}
