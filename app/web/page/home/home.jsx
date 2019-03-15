import React, { Component } from 'react';
import './home.css';
export default class Home extends Component {
  componentDidMount() {
    console.log('----componentDidMount-----');
  }

  render() {
    return <div>
      <h1>home page</h1>
    </div>;
  }
}