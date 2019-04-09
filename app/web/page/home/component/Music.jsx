import React, { Component } from 'react'
import ReactAudioPlayer from 'react-audio-player'
import './music.css'
import musicImg from 'asset/images/music.png'

import music1 from 'asset/music/music1.mp3'
import music2 from 'asset/music/music2.mp3'
import music3 from 'asset/music/music3.mp3'

let audioArr = [
  {
    singer: '陈雪凝',
    songName: '绿色',
    songUrl: music2
  },
  {
    singer: '张敬轩',
    songName: '只是太爱你',
    songUrl: music1
  },
  {
    singer: '胡夏、郁可唯',
    songName: '知否知否',
    songUrl: music3
  }
]

export default class Music extends Component {
  constructor(props) {
    super(props)
    this.state = { activeIndex: 0 }

    this.toNextSong = this.toNextSong.bind(this);
    this.playingHandler = this.playingHandler.bind(this);
    this.onLoadedMetadataHandler = this.onLoadedMetadataHandler.bind(this);
    this.canPlayHandler = this.canPlayHandler.bind(this);
    this.canPlayThroughHandler = this.canPlayThroughHandler.bind(this);
  }
  toNextSong() {
    let nowActiveIndex = this.state.activeIndex
    this.state.activeIndex =
      nowActiveIndex == audioArr.length - 1 ? 0 : nowActiveIndex++
  }
  playingHandler() {
    console.log('1111', this.rap)
  }
  onLoadedMetadataHandler(event) {
    console.log('onLoadedMetadataHandler', event, this.rap.audioEl)
  }
  canPlayHandler(event) {
    console.log('canPlayHandler', event, this.rap.audioEl)
  }
  canPlayThroughHandler(event) {
    console.log('canPlayThroughHandler', event, this.rap.audioEl)
  }
  render() {
    return (
      <div className={this.props.className}>
        <ReactAudioPlayer
          ref={element => {
            this.rap = element
          }}
          src={audioArr[this.state.activeIndex].songUrl}
          autoPlay
          controls
          onEnd={this.toNextSong}
          onPlay={this.playingHandler}
          onLoadedMetadata={this.onLoadedMetadataHandler}
          onCanPlay={this.canPlayHandler}
          onCanPlayThrough={this.canPlayThroughHandler}
        />
        {/* <audio controls autoPlay onEnded={this.toNextSong}>
          <source src={audioArr[this.state.activeIndex].songUrl} />
          not support
        </audio> */}
        <div className="music-bar">
          <span className="music-name">
            {audioArr[this.state.activeIndex].songName}
          </span>
          <span className="music-singer">
            {audioArr[this.state.activeIndex].singer}
          </span>
          <img src={musicImg} alt="" />
        </div>
      </div>
    )
  }
}
