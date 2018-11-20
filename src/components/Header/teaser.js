import React from 'react'
import headerStyles from "../../css/header.module.css"

const Teaser = () => (
  <div className={headerStyles.container}>
    <div className={headerStyles.teaser}>
        <div className={headerStyles.teaserContentWrap}>
            <h3>Ihr Partner für Digitale Lösungen</h3>
            <h1>Sie möchten eine App erstellen lassen?</h1>
            <p>
              Wir bieten Ihnen Beratung, Planung und Umsetzung aus einer Hand.
              Dabei setzen wir auf bewerte Techniken.
            </p>
        </div>
    </div>
  </div>
)

export default Teaser
