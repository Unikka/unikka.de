import React from 'react'
import { Link } from 'gatsby'
import Icon from '../../assets/unikka.svg';

import '../../assets/sass/layout.scss';

const Logo = () => (
  <div className="logoContainer" >
    <Link to="/">
      <Icon className="logo" />
    </Link>
  </div>
)

export default Logo
