import React from 'react'
import formStyles from '../../css/forms.module.css'

const TextArea = ({name, label, rows}) => (
  <div className={formStyles.formGroup}>
    <label>
      {label}
    </label>
    <textarea name={name} className={formStyles.formControl} rows={rows} />
  </div>
)

export default TextArea
