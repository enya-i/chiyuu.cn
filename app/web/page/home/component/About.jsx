import React, { Component } from 'react'
import './about.css'
import aboutPic from 'asset/images/about_pic.png'

export default class About extends Component {
  render() {
    return (
      <div className="about-comp">
        <div className="about-container">
          <div className="about-title">
            关于 <span className="about-title-sub">About</span>
          </div>
          <div className="about-content">
            <div className="about-author">蔡小民</div>
            <div className="about-type-item">
              <div className="about-type-title">履历</div>
              <div className="about-info-item">
                <div className="about-info-item-title">
                  深圳市大富网络技术有限公司{' '}
                  <span className="about-info-item-job">UI设计师</span>
                  <span className="about-info-item-time">2018.3 - 至今</span>
                </div>
                <div className="about-info-item-intro">
                  负责公司网站视觉和体验优化和迭代，参与并主导知识引擎app的设计
                </div>
              </div>
              <div className="about-info-item">
                <div className="about-info-item-title">
                  深圳市一米互动科技有限公司
                  <span className="about-info-item-job">UI设计师</span>
                  <span className="about-info-item-time">2017.6-2018.3</span>
                </div>
                <div className="about-info-item-intro">
                  负责公司所有的设计工作，app、小程序、网站、品牌等
                </div>
              </div>
            </div>
            <div className="about-type-item">
              <div className="about-type-title">教育</div>
              <div className="about-info-item">
                <div className="about-info-item-title">
                  武汉工程大学
                  <span className="about-info-item-time">2013.9 - 2017.6</span>
                </div>
                <div className="about-info-item-intro">
                  2013年考入武汉工程大学艺术设计学院视觉传达专业
                </div>
              </div>
              <div className="about-info-item">
                <div className="about-info-item-title">
                  三峡艺术高中
                  <span className="about-info-item-time">2010.9 - 2013.6</span>
                </div>
                <div className="about-info-item-intro">
                  3年艺术生涯是我们为梦想拼搏奋斗、难以忘怀的时光
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="about-bg">
          <img src={aboutPic} alt="" />
        </div>
      </div>
    )
  }
}
