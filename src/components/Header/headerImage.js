import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import headerStyles from '../../css/header.module.css'

const HeaderImage = () => {
  const imageKey = typeof window !== 'undefined' && window.innerWidth < 420 ? 'portraitHeaderImage' : 'landscapeHeaderImage';
  return (
    <StaticQuery
      query={headerImages}
      render={data => (
        <div className={headerStyles.headerImage}>
          <Img fluid={data[imageKey].childImageSharp.fluid} />
        </div>
      )}
    />
  )
}

export const headerImages = graphql`
  query {
    landscapeHeaderImage: file(relativePath: { eq: "home-office.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 960) {
          ...GatsbyImageSharpFluid
        }
      }
    },
    portraitHeaderImage: file(relativePath: { eq: "home-office-square.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 960) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;

export default HeaderImage