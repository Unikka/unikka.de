import React from 'react'
import headerStyles from '../../css/header.module.css'
import {Navigation, Logo, Teaser} from './'

const Header = ({ showHeaderTeaser }) => {
  const teaserElement = showHeaderTeaser === true ? <Teaser/> : null;

  return (
    <header className={headerStyles.header}>
      <div className={headerStyles.headerTop}>
        <div className={headerStyles.container}>
          <Logo />
          <Navigation />
        </div>
      </div>

      {teaserElement}
    </header>
  )
}

export default Header
