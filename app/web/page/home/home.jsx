import React, { Component } from 'react'
import { Carousel, Tooltip } from 'antd'
import './home.css'
import Intro from './component/Intro'
import Works from './component/Works'
import About from './component/About'
import Contact from './component/Contact'
import logoImg from 'asset/images/logo.png'
import menuImg from 'asset/images/menu.png'
import QQImg from 'asset/images/QQ.png'
import wechatImg from 'asset/images/wechat.png'
import emailImg from 'asset/images/email.png'
import zcoolImg from 'asset/images/zcool.png'

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
        <img className="home-page-logo home-page-fixed" src={logoImg} alt="" />
        <img className="home-page-menu home-page-fixed" src={menuImg} alt="" />
        <div className="home-page-contacts home-page-fixed">
          <Tooltip placement="right" title="qq联系方式">
            <img src={QQImg} alt="" />
          </Tooltip>
          <Tooltip placement="right" title="wechat联系方式">
            <img src={wechatImg} alt="" />
          </Tooltip>
          <Tooltip placement="right" title="email联系方式">
            <img src={emailImg} alt="" />
          </Tooltip>
          <Tooltip placement="right" title="zcool联系方式">
            <img src={zcoolImg} alt="" />
          </Tooltip>
        </div>
        <Carousel ref={carousel => (this.carousel = carousel)} vertical>
          <Intro />
          <Works />
          <About />
          <Contact />
        </Carousel>
      </div>
    )
  }
}
