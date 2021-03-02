import React from 'react'
import { navigate } from 'gatsby'

import '../../assets/sass/layout.scss';

const Form = ({ name, children }) => {
  const submitForm = async event => {
    event.preventDefault()
    const form = event.target
    const data = getFormData(form)

    try {
      const response = await fetch(form.action, {
        method: form.method,
        body: JSON.stringify(data),
        headers: {
          'Content-Type': 'application/json',
        },
      })
      const json = await response.json()
      if (json.ok === true) {
        navigate('contact/success')
      }
    } catch (error) {
      console.error('Error:', error)
    }
  }

  const getFormData = form => {
    const data = new FormData(form)
    const formData = {}
    data.forEach((value, key) => {
      formData[key] = value
    })

    return formData
  }

  return (
    <form
      action="https://formspree.io/mwkpzklw"
      name={name}
      method="POST"
      className="form"
      onSubmit={submitForm}
    >
      <input type="hidden" name="form-name" value={name} />
      {children}
    </form>
  )
}

export default Form
