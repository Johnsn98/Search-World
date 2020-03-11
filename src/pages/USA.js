import React, { Component } from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SearchBar from "../components/searchbar"
import SEO from "../components/seo"

export class USA extends Component {
  componentDidMount() {
    function highlight() {
      document.getElementById("USA").style.border = "5px solid #3b5998"
    }
    highlight()
  }

  render() {
    return (
      <div>
        <>
          <Layout>
            <SEO title="All of America Marketplace Search" />
            <div className="container">
              <div className="centered">
                <div className="style1">
                  <h1 className="style1"> Search the Entire USA </h1>
                  <div> Items for Sale </div>
                  <div></div>
                </div>
                <div className="style2">Remove the 100-mile boundary</div>
                <Link to="/">
                  <input type="submit" value="Learn More" className="button1" />
                </Link>
              </div>
            </div>

            <SearchBar />
            <Link style={{ textDecoration: "none" }} to="/">
              <h1>Country Selected: USA </h1>
            </Link>
          </Layout>
        </>
      </div>
    )
  }
}

export default USA
