import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

const JSSSandboxPromo = () => (
    <StaticQuery
        query={graphql`
      query {
        file(name: { eq: "jss_sandbox_promo" }) {
          childImageSharp {
            fluid(maxWidth: 400) {
              ...GatsbyImageSharpFluid_tracedSVG
            }
          }
        }
      }
    `}
        render={data => (
            <Img fluid={data.file.childImageSharp.fluid} alt="JSS Sandbox" />
        )}
    />
)

export default JSSSandboxPromo;
