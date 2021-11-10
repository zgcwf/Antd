import React, { Component } from 'react'
import './App.css'
import Buttons from './components/Button'
import Icons from './components/Icons'
export default class App extends Component {
  render() {
    return (
      <div>
        <Buttons />
        <Icons></Icons>
      </div>
    )
  }
}
