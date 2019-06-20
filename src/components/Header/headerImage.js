import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import headerStyles from '../../css/header.module.css'

const HeaderImage = () => (
  <StaticQuery
    query={headerImage}
    render={data => (
      <div className={headerStyles.headerImage}>
        <Img fluid={data.placeholderImage.childImageSharp.fluid} />
      </div>
    )}
  />
)


export const headerImage = graphql`
  query {
    placeholderImage: file(relativePath: { eq: "home-office.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 960) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;

export default HeaderImage