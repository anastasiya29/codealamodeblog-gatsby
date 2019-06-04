import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

const SymposiumPromo = () => (
    <StaticQuery
        query={graphql`
      query {
        file(name: { eq: "symposium_promo" }) {
          childImageSharp {
            fluid(maxWidth: 400) {
              ...GatsbyImageSharpFluid_tracedSVG
            }
          }
        }
      }
    `}
        render={data => (
            <Img fluid={data.file.childImageSharp.fluid} alt="Sitecore Symporium" />
        )}
    />
)

export default SymposiumPromo;
