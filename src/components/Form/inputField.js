import React from 'react'
import formStyles from '../../css/forms.module.css'

const InputField = ({name, label, type}) => {
  const inputType = type === undefined ? 'text' : type;

  return (
    <div className={formStyles.formGroup}>
      <label>
        {label}
      </label>
      <input type={inputType} name={name} className={formStyles.formControl} />
    </div>
  )
}

export default InputField
