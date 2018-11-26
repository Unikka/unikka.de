import React from 'react'
import formStyles from '../../css/forms.module.css'

const Form = ({name, children}) => {
  return (
    <form name={name} method="POST" className={formStyles.form} netlify="true" netlify-honeypot="more-infos">
      <input name="more-infos" />
      {children}
    </form>
  )
}

export default Form
