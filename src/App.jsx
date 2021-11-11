import React, { Component } from 'react'
import './App.css'
// import Buttons from './components/Button'
// import Icons from './components/Icons'
// import Typographys from './components/Typographys'
// import Grids from './components/Grids.jsx'
// import Layouts from './components/Layouts.jsx'
// import Space from './components/Space'
// import Affix from './components/Affix'
import Breadcrumb from './components/Breadcrumbs'
// import Dropdown from './components/Dropdown'
// import Menu from './components/Menu'
export default class App extends Component {
  render() {
    return (
      <div>
        <Breadcrumb />

        {/*   <Buttons />
        <Icons></Icons>
        <Typographys />
        <Grids /> 
        <Layouts />
       
        <Space />
        <Affix /> 
        <Menu />
        <Dropdown />*/}
      </div>
    )
  }
}
