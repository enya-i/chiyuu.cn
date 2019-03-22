import React, { Component } from 'react'
import { Icon } from 'antd'
import './contact.css'

export default class Contact extends Component {
  render() {
    return (
      <div className="contact-comp">
        <div className="contact-container">
          <div className="contact-comp-title">
            联系 <span className="contact-title-sub">Contact</span>
          </div>
          <div className="contact-content">
            <div className="contact-expect-col">
              让我们一起做一些更美好的事情。
            </div>
            <div className="contact-main-col">
              <div className="contact-main-content">
                <div className="contact-author">
                  蔡小民<span className="contact-nickname">Chiyuu</span>
                </div>
                <div className="contact-intro">
                  不想做导演的摄影爱好者不是好的设计师
                </div>
                <div className="contact-list">
                  <div className="contact-item">
                    <div className="contact-item-label">地址</div>
                    <div className="contact-item-content">
                      广东省深圳市宝安区航城大道西乡街道
                    </div>
                  </div>
                  <div className="contact-item">
                    <div className="contact-item-label">邮箱</div>
                    <div className="contact-item-content">374631450@qq.com</div>
                  </div>
                  <div className="contact-item">
                    <div className="contact-item-label">微信</div>
                    <div className="contact-item-content">mmm1220i</div>
                  </div>
                  <div className="contact-item">
                    <div className="contact-item-label">手机</div>
                    <div className="contact-item-content">130 2545 0500</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="contact-profile-col">
              <img
                src="https://images.pexels.com/photos/2014806/pexels-photo-2014806.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                alt=""
              />
            </div>
          </div>
          <div className="contact-message">
            <Icon type="message" className="contact-message-icon" />
            <div className="contact-message-date">2019-03-21</div>
            <div className="contact-message-detail">
              {'来自深圳的小蔡'}: 加油加油鸭~~~
            </div>
            <div className="contact-message-buttons">
              <div className="contact-message-buttons-item">
                <Icon type="up" />
              </div>
              <div className="contact-message-buttons-item">
                <Icon type="down" />
              </div>
            </div>
          </div>
          <div className="contact-message-more">
            查看更多
            <Icon type="right" />
          </div>
        </div>
        <div className="contact-footer">
          <span className="contact-footer-copyright">Chiyuu</span>
          <span className="contact-footer-thanks">
            特别感谢@ZhangKaitlyn、Rango
          </span>
        </div>
      </div>
    )
  }
}
