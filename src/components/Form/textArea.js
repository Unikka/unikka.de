import React from 'react'
import '../../assets/sass/layout.scss';


const TextArea = ({name, label, rows}) => (
  <div className="formGroup">
    <label>
      {label}
    </label>
    <textarea name={name} className="formControl" rows={rows} />
  </div>
)

export default TextArea
