import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '../../assets/sass/layout.scss'

const Submit = ({ icon, label }) => {
  const sendIcon = icon === undefined ? null : <FontAwesomeIcon icon={icon} />
  return (
    <button type="submit" className="formSubmit">
      {sendIcon}
      {label}
    </button>
  )
}

export default Submit
