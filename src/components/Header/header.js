import React from 'react'
import Teaser from './teaser'
import Navigation from './navigation'
import Icon from '../../assets/unikka.svg';
import headerStyles from "../../css/header.module.css"

const Header = ({ siteTitle, showHeaderTeaser }) => {
  const teaserElement = showHeaderTeaser === true ? <Teaser/> : null;

  return (
    <div className={headerStyles.header}>
      <div className={headerStyles.headerTop}>
        <div className={headerStyles.container}>
          <Icon className={headerStyles.logo} />
          <Navigation />
        </div>
      </div>

      {teaserElement}
    </div>
  )
}

export default Header
