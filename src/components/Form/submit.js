import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import formStyles from '../../css/forms.module.css'

const Submit = ({icon, label}) => {
  const sendIcon = icon === undefined ? null : <FontAwesomeIcon icon={icon} />
  return (
    <button type="submit" className={formStyles.formSubmit}>{sendIcon}{label}</button>
  )
}

export default Submit
