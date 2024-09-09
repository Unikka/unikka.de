import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import { Navigation, Logo, Teaser } from '.'

import '../../assets/sass/layout.scss'

const Header = ({ showHeaderTeaser, menuLinks }) => {
  const teaserElement = showHeaderTeaser === true ? <Teaser /> : null

  return (
    <header className={`header ${showHeaderTeaser ? 'with-teaser' : ''}`}>
      <div className="headerOverlay">
        <div className="headerTop">
          <div className="container">
            <Logo />
            <Navigation items={menuLinks} />
          </div>
        </div>

        {teaserElement}
      </div>
      <StaticImage
        src="../../images/home-office.jpg"
        alt="Nice desk with a notebook"
        placeholder="blurred"
        layout="fullWidth"
        formats={['auto', 'webp', 'avif']}
        transformOptions={{ cropFocus: 'attention', fit: 'cover' }}
        className="headerImage"
      />
    </header>
  )
}

export default Header
