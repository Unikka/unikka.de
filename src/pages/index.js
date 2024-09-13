import React from 'react'
import Layout from '../components/layout'
import { FeatureBoxItem, FeatureBoxContainer } from '../components/FeatureBox/'
import { faNeos, faReact, faPhp } from '@fortawesome/free-brands-svg-icons'
import { faUserTie } from '@fortawesome/free-solid-svg-icons'

const IndexPage = () => (
  <Layout showHeaderTeaser={true}>
    <a
      rel="me"
      href="https://neos.social/@markus306"
      className="invisible-link"
    >
      Mastodon
    </a>
    <section>
      <h1>Was wir anbieten</h1>
      <FeatureBoxContainer>
        <FeatureBoxItem
          title="Beratung"
          description="Individuelle Beratung bei Fragen zu Neos, Web-Applikationen, Accessibility und Digitalisierung."
          icon={faUserTie}
        />
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
          title="Mobile Apps"
          description="Crossplattform Applikationen auf Basis von React-Native. "
          icon={faReact}
        />
      </FeatureBoxContainer>
    </section>
  </Layout>
)

export default IndexPage

export function Head() {
  return (
    <script defer data-domain="unikka.de" src="https://akksogs8sw4g44sg04wccg8w.65.109.138.201.sslip.io/js/script.js"></script>
  )
}