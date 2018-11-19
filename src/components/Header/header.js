import React from 'react'
import { Link, StaticQuery, graphql } from 'gatsby'
import Teaser from './teaser'
import Navigation from './navigation'
import Icon from '../../assets/unikka.svg';
import headerStyles from "../../css/header.module.css"

const Header = ({ siteTitle }) => (
  <div className={headerStyles.header}>
    <div className={headerStyles.headerTop}>
      <div className={headerStyles.container}>
        <Icon className={headerStyles.logo} />
        <Navigation />
      </div>
    </div>

    <Teaser/>
  </div>
)

export default Header
