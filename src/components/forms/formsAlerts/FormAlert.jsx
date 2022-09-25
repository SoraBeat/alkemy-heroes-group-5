import React from 'react'
import "./FormAlert.scss"

const FormAlert = (props) => {
  return (
    <div>
        <p className='alert fw-bold'>{props.text}</p>
    </div>
  )
}

export default FormAlert