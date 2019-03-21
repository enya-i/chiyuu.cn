import React, { Component } from 'react'
import WorkItem from './WorkItem'
import './works.css'

const numbers = [1, 2, 3, 4, 5]
const listItems = numbers.map(number => (
  <WorkItem className="works-item" index="number" key={number.toString()} />
))

export default class Works extends Component {
  render() {
    return (
      <div className="works-comp">
        <div className="works-container">
          <div className="works-comp-title">
            作品 <span className="works-title-sub">Works</span>
          </div>
          <div className="works-list">{listItems}</div>
        </div>
      </div>
    )
  }
}
