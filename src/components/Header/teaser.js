import React from 'react'
import headerStyles from "../../css/header.module.css"

const Teaser = () => (
  <div className={headerStyles.container}>
    <div className={headerStyles.teaser}>
        <div className={headerStyles.teaserContentWrap}>
            <h1>Hi people</h1>
            <p>Welcome to your new Gatsby site.</p>
            <p>Now go build something great.</p>
        </div>
    </div>
  </div>
)

export default Teaser
