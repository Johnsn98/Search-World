import React, { Component } from "react"
import { Link } from "gatsby"

export class footer extends Component {
  render() {
    return (
      <>
        <div className="footer">
          <Link to="/" className="footerLink">
            Home
          </Link>
          <Link to="/about" className="footerLink">
            About
          </Link>
          <Link to="/contact" className="footerLink">
            Contact
          </Link>
          <Link to="/faq" className="footerLink">
            FAQ
          </Link>
        </div>
      </>
    )
  }
}

export default footer
