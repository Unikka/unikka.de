import React from 'react'
import Layout from '../components/layout'
import { FeatureBoxItem, FeatureBoxContainer } from '../components/FeatureBox/'
import { faNeos, faReact, faPhp } from '@fortawesome/free-brands-svg-icons'
import { faUserTie } from '@fortawesome/free-solid-svg-icons'

const IndexPage = () => (
  <Layout showHeaderTeaser={true}>
    <section>
      <h1>Was wir anbieten</h1>
      <FeatureBoxContainer>
        <FeatureBoxItem
          title="Webseiten"
          description="Internetpräsenzen auf Basis des Open-Source CMS Neos."
          icon={faNeos}
        />
        <FeatureBoxItem
          title="Web Applikationen"
          description="Individuelle Umsetzung einer Webanwendung."
          icon={faPhp}
        />
        <FeatureBoxItem
          title="Beratung"
          description="Individuelle Beratung bei Fragen zu Neos, Web-Applikationen, Accessibility und Digitalisierung."
          icon={faUserTie}
        />
        <FeatureBoxItem
          title="Mobile Apps"
          description="Crossplattform Applikationen auf Basis von React-Native. "
          icon={faReact}
        />
      </FeatureBoxContainer>
    </section>
  </Layout>
)

export default IndexPage
