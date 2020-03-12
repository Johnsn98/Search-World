import React from "react"

import Layout from "../components/layout"
import Searchbarc from "../components/searchbarc"
import SEO from "../components/seo"
import { Link } from "gatsby"

import "../components/style.css"

const IndexPage = () => (
  <>
    <Layout>
      <SEO
        title="Find Anything in the World"
        description="Facebook Marketplace Search Engine"
      />
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
      <Searchbarc />
    </Layout>
  </>
)

export default IndexPage
