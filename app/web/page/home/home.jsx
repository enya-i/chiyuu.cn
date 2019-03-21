import React, { Component } from 'react'
import { Carousel } from 'antd'
import './home.css'
import Intro from './component/Intro'
import Works from './component/Works'
import About from './component/About'

export default class Home extends Component {
  constructor(props) {
    super()
    this.handleWheelScroll = this.handleWheelScroll.bind(this)
  }
  componentDidMount() {
    console.log('----componentDidMount-----')
  }

  handleWheelScroll(e) {
    let deltaY = e.deltaY
    if (deltaY > 0) {
      this.carousel.next()
    } else if (deltaY < 0) {
      this.carousel.prev()
    }
  }

  render() {
    return (
      <div className="home-page" onWheel={this.handleWheelScroll}>
        <Carousel ref={carousel => (this.carousel = carousel)} vertical>
          <Intro index="1" />
          <Works index="2" />
          <About index="3" />
          <Intro index="4" />
        </Carousel>
      </div>
    )
  }
}
