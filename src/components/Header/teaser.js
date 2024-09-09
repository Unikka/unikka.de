import React from 'react'
import { Link } from 'gatsby'
import '../../assets/sass/layout.scss'

const Teaser = () => (
  <div className="container">
    <div className="teaser">
      <div className="teaserContentWrap">
        <h3>Ihr Partner für Digitale Lösungen</h3>
        <h1>Haben sie den Weg in die Digitalisierung schon gefunden?</h1>
        <p>
          Wir entwickeln native Mobile-Apps und Full-Stack-Applications mittels
          effizienter cross-platform Frameworks aktuellsten Web-Standards, sowie
          einem modernen und benutzerfreundlichem CMS.
        </p>

        <Link to="/contact" className="teaserButton">
          Schreiben sie Uns
        </Link>
      </div>
    </div>
  </div>
)

export default Teaser
