import React from 'react'
import { Link } from 'gatsby'
import headerStyles from "../../css/header.module.css"

const Navigation = () => (
  <ul className={headerStyles.navigation}>
      <li>
        <Link to="/" style={headerStyles.navigationItem} activeClassName="active">
          Home
        </Link>
      </li>
      <li>
        <Link to="blog" style={headerStyles.navigationItem} activeClassName="active">
          Blog
        </Link>
      </li>
      <li>
        <Link to="contact" style={headerStyles.navigationItem} activeClassName="active">
          Kontakt
        </Link>
      </li>
      <li>
        <Link to="impressum" style={headerStyles.navigationItem} activeClassName="active">
          Impressum
        </Link>
      </li>
  </ul>
)

export default Navigation
