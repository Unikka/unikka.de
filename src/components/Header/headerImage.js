import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import headerStyles from '../../css/header.module.css'

const HeaderImage = () => (
  <StaticQuery
    query={window.innerWidth < 420 ? portraitHeaderImage : headerImage}
    render={data => (
      <div className={headerStyles.headerImage}>
        <Img fluid={data.headerImage.childImageSharp.fluid} />
      </div>
    )}
  />
)


export const headerImage = graphql`
  query {
    headerImage: file(relativePath: { eq: "home-office.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 960) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;

export const portraitHeaderImage = graphql`
  query {
    headerImage: file(relativePath: { eq: "home-office-square.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 960) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;

export default HeaderImage