import React from 'react'
import headerStyles from '../../css/header.module.css'
import {Navigation, Logo, Teaser, HeaderImage} from '.'

const Header = ({ showHeaderTeaser, menuLinks }) => {
  const teaserElement = showHeaderTeaser === true ? <Teaser/> : null;

  return (
    <header className={headerStyles.header}>
      <div className={headerStyles.headerOverlay}>
        <div className={headerStyles.headerTop}>
          <div className={headerStyles.container}>
            <Logo />
            <Navigation items={menuLinks} />
          </div>
        </div>

        {teaserElement}
      </div>
      <HeaderImage />
    </header>
  )
}

export default Header
