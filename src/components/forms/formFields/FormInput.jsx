import React from 'react'

const FormInput = (props) => {
  return (
    <input
    className="form-control"
    type={props.type}
    placeholder={props.placeholder}
    name={props.name}
    onChange={props.formik.handleChange}
  />
  )
}

export default FormInput