import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

import { Header } from './Header'
import icon32 from '../images/favicon-32x32.png'
import icon16 from '../images/favicon-16x16.png'
import appleTouchIcon from '../images/apple-touch-icon.png'

const Layout = ({ children, showHeaderTeaser }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
            menuLinks {
              name
              link
            }
          }
        }
      }
    `}
    render={(data) => (
      <>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            { name: 'description', content: 'Sample' },
            { name: 'keywords', content: 'sample, something' },
          ]}
          link={[
            {
              rel: 'icon',
              type: 'image/png',
              href: `${icon32}`,
              sizes: '32x32',
            },
            {
              rel: 'icon',
              type: 'image/png',
              href: `${icon16}`,
              sizes: '16x16',
            },
            {
              rel: 'apple-touch-icon',
              type: 'image/png',
              href: `${appleTouchIcon}`,
              sizes: '180x180',
            },
          ]}
        >
          <html lang="en" />
        </Helmet>
        <Header
          showHeaderTeaser={showHeaderTeaser}
          menuLinks={data.site.siteMetadata.menuLinks}
        />
        <section className="contentSection">{children}</section>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
