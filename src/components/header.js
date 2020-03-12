import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import "./style.css"

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `#3b5998`,
      padding: 10,
    }}
  >
    <div
      style={{
        margin: "0 auto",
        textAlign: "center",
        padding: `.8rem .0875rem`,
        backgroundColor: `#3b5998`,
      }}
    >
      <h3 style={{ textTransform: "uppercase" }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
            backgroundColor: `#3b5998`,
          }}
        >
          <h1
            style={{
              color: "white",
              lineHeight: 1,
              fontSize: "1.5rem",
            }}
          >
            Search World Marketplace
          </h1>
          <h3
            style={{
              color: "gray",
              fontSize: ".8rem",
              padding: 0,
              lineHeight: 0,
            }}
          >
            Facebook Marketplace Search Engine
          </h3>
        </Link>
      </h3>

      <div className="topnav1">
        <div className="fa"></div>
        <Link to="/" className="button3">
          <i className="fa fa-globe"></i>
        </Link>
      </div>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
