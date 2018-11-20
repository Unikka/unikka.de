import React from 'react'
import { Link } from 'gatsby'
import headerStyles from '../../css/header.module.css'
import Icon from '../../assets/unikka.svg';

const Logo = () => (
  <div className={headerStyles.logoContainer} >
    <Link to="/">
      <Icon className={headerStyles.logo} />
    </Link>
  </div>
)

export default Logo
