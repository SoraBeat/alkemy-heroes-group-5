import React from 'react'
import "./FormButton.scss"

const FormButton = (props) => {
  return (
    <input type="submit" value={props.text} className="btn form-button mt-3 m" />
  )
}

export default FormButton