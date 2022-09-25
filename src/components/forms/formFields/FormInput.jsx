import React from 'react'
import "./FormInput.scss"

const FormInput = (props) => {
  return (
    <input
    className={props.danger&&props.touched?"form-control input-danger fw-semibold" :"form-control fw-semibold"}
    type={props.type}
    placeholder={props.placeholder}
    name={props.name}
    onChange={props.formik.handleChange}
  />
  )
}

export default FormInput