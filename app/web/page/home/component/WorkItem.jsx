import React, { Component } from 'react'
import './workItem.css'
export default class Works extends Component {
  render() {
    return (
      <div className={this.props.className + ' work-item'}>
        <img
          src="https://images.pexels.com/photos/2014806/pexels-photo-2014806.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
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
