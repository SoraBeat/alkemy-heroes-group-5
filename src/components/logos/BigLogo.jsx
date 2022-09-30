import React from 'react'
import "./BigLogo.scss"

import logo from "../../assets/images/logo.png"

const BigLogo = () => {
  return (
    <img className='big-logo' src={logo} alt="logo" />
  )
}

export default BigLogo