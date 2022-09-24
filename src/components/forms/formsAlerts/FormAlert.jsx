import React from 'react'

const FormAlert = (props) => {
  return (
    <div className={props.text?"border-top border-2 border-danger mx-auto":""}>
        <p className='text-danger fw-bold'>{props.text}</p>
    </div>
  )
}

export default FormAlert