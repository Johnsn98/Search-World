import React from "react"

import Layout from "../components/layout"
import SearchBar from "../components/searchbar"
import SEO from "../components/seo"
import { Link } from "gatsby"

import "../components/style.css"

const IndexPage = () => (
  <>
    <Layout>
      <SEO title="Global Facebook search" />
      <div className="container">
        <div className="centered">
          <div className="style1">
            <h1 className="style1"> Search the Entire World </h1>
            <div> Items for Sale </div>
          </div>
          <div className="style2">Remove the 100-mile boundary</div>
          <Link to="/about">
            <input type="submit" value="Learn More" className="button1" />
          </Link>
        </div>
      </div>
      <SearchBar />
    </Layout>
  </>
)

export default IndexPage
