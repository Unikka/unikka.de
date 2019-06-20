import React from 'react'
import { Link } from 'gatsby'
import headerStyles from "../../css/header.module.css"

const Teaser = () => (
  <div className={headerStyles.container}>
    <div className={headerStyles.teaser}>
        <div className={headerStyles.teaserContentWrap}>
            <h3>Ihr Partner für Digitale Lösungen</h3>
            <h1>Haben sie den Weg in die Digitalisierung schon gefunden?</h1>
            <p>
              Wir entwickeln native Mobile-Apps und Full-Stack-Applications mittels effizienter cross-platform Frameworks aktuellsten Web-Standards, sowie einem modernen und benutzerfreundlichem CMS.
            </p>

            <Link to="/contact" className={headerStyles.teaserButton}>Schreiben sie Uns</Link>
        </div>
    </div>
  </div>
)

export default Teaser
