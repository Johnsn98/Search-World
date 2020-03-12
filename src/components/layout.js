/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import CountryBar from "./countrybar"
import Footer from "./footer"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} />
      <div>
        <div
          style={{
            margin: `0 auto`,
            maxWidth: "100vw",
          }}
        >
          <main>{children}</main>
        </div>
        <CountryBar />
        <div className="headings">
          <h1> Search facebook marketplace over 100 miles</h1>
          <h2>
            {" "}
            See what is for sale in the entire world on facebook marketplace{" "}
          </h2>
        </div>

        <Footer />
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
