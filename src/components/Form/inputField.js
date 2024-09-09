import React from 'react'
import '../../assets/sass/layout.scss'

const InputField = ({ name, label, type }) => {
  const inputType = type === undefined ? 'text' : type

  return (
    <div className="formGroup">
      <label>{label}</label>
      <input type={inputType} name={name} className="formControl" />
    </div>
  )
}

export default InputField
