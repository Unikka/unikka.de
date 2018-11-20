import React from 'react'
import Layout from '../components/layout'
import { FeatureBoxItem, FeatureBoxContainer } from '../components/FeatureBox/'

const IndexPage = () => (
  <Layout showHeaderTeaser={true} >
    <section>
      <h1>Was wir anbieten</h1>
      <FeatureBoxContainer>
        <FeatureBoxItem
            title='Mobile Apps'
            description='Crossplattform Applikationen auf Basis von React-Native. ' />
        <FeatureBoxItem
          title='Webseiten'
          description='Internetpräsenzen auf Basis des Open-Source CMS Neos.' />
        <FeatureBoxItem
          title='Web Applikationen'
          description='Individuelle Umsetzung einer Webanwendung.' />
      </FeatureBoxContainer>
    </section>
  </Layout>
)

export default IndexPage
