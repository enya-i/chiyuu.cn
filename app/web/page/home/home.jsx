import React, { Component } from 'react'
import { Carousel } from 'antd'
import './home.css'
import Intro from './component/Intro'

export default class Home extends Component {
  componentDidMount() {
    console.log('----componentDidMount-----')
  }

  render() {
    return (
      <div className="home-page">
        <Carousel vertical>
          <Intro index="1" />
          <Intro index="2" />
          <Intro index="3" />
          <Intro index="4" />
        </Carousel>
      </div>
    )
  }
}
