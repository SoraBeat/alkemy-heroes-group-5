import React from 'react'
import "./BigLogo.scss"

import logo from "../../assets/images/logo.png"

const BigLogo = (props) => {
  return (
    <img className='big-logo' src={logo} alt="logo" style={{height:props.height,width:props.width,margin:props.margin}}/>
  )
}

export default BigLogo