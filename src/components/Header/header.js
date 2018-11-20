import React from 'react'
import { Link } from 'gatsby'
import headerStyles from '../../css/header.module.css'
import {Navigation, Logo, Teaser} from './'

const Header = ({ showHeaderTeaser }) => {
  const teaserElement = showHeaderTeaser === true ? <Teaser/> : null;

  return (
    <header className={headerStyles.header}>
      <div className={headerStyles.headerOverlay}>
        <div className={headerStyles.headerTop}>
          <div className={headerStyles.container}>
            <Link to="/">
              <Logo />
            </Link>
            <Navigation />
          </div>
        </div>

        {teaserElement}
      </div>
    </header>
  )
}

export default Header
