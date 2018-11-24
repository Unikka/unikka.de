import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import headerStyles from '../../css/header.module.css'

const HeaderImage = () => (
  <StaticQuery
    query={graphql`
      query {
        placeholderImage: file(relativePath: { eq: "header_image.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 960) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={data => (
      <div className={headerStyles.headerImage}>
        <Img fluid={data.placeholderImage.childImageSharp.fluid} />
      </div>
    )}
  />
)

export default HeaderImage