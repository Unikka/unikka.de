import React from 'react'
import Layout from '../components/layout'
import { Form, InputField, TextArea, Submit, Row } from '../components/Form/'
import { faPaperPlane } from '@fortawesome/free-regular-svg-icons'
import { Script } from 'gatsby'

const Contact = () => {
  return (
    <Layout>
      <Script defer data-domain="unikka.de" src="https://akksogs8sw4g44sg04wccg8w.65.109.138.201.sslip.io/js/script.js" />
      <h1>Kontakt</h1>
      <p>
        Wir würden uns freuen, von Ihnen zu hören. Schreiben Sie uns, wenn Sie
        Fragen zu unseren Projekten oder Dienstleistungen haben.
      </p>

      <Form name="contact">
        <Row>
          <InputField name="name" label="Name" />
          <InputField name="email" label="E-Mail" type="email" />
        </Row>
        <TextArea name="message" label="Nachricht" rows="8" />
        <Submit label="Nachricht senden" icon={faPaperPlane} />
      </Form>
    </Layout>
  )
}

export default Contact
