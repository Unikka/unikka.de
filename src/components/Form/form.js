import React from 'react'
import formStyles from '../../css/forms.module.css'

const Form = ({name, children}) => {
  return (
    <form
      action="/contact/success"
      name={name}
      method="POST"
      className={formStyles.form}
      data-netlify="true"
      netlify-honeypot="more-infos"
    >
      <input type="hidden" name="form-name" value={name} />
      <input name="more-infos" />
      {children}
    </form>
  )
}

export default Form
