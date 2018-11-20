import React from 'react'
import Layout from '../components/layout'
import { FeatureBoxItem, FeatureBoxContainer } from '../components/FeatureBox/'
import { faNeos, faReact, faPhp } from '@fortawesome/free-brands-svg-icons'

const IndexPage = () => (
  <Layout showHeaderTeaser={true} >
    <section>
      <h1>Was wir anbieten</h1>
      <FeatureBoxContainer>
        <FeatureBoxItem
            title='Mobile Apps'
            description='Crossplattform Applikationen auf Basis von React-Native. '
            icon={faReact} />
        <FeatureBoxItem
          title='Webseiten'
          description='Internetpräsenzen auf Basis des Open-Source CMS Neos.'
          icon={faNeos} />
        <FeatureBoxItem
          title='Web Applikationen'
          description='Individuelle Umsetzung einer Webanwendung.'
          icon={faPhp} />
      </FeatureBoxContainer>
    </section>
  </Layout>
)

export default IndexPage
