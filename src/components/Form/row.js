import React from 'react'
import formStyles from '../../css/forms.module.css'

const Row = ({children}) => (
  <div className={formStyles.formRow}>{children}</div>
)

export default Row
