import React from "react"

import Layout from "../components/layout"
import SearchBar from "../components/searchbar"
import SEO from "../components/seo"

import "../components/style.css"

const contact = () => (
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
          <input type="submit" value="Learn More" className="button1" />
        </div>
      </div>

      <h1>Contact Page</h1>

      <div className="countrybar">
        <div className="about">
          <h3>Created: </h3>
          <p>10/2/2019 </p>
          <p>Nathan Johnson</p>
          <p> Milwaukee, Wisconsin</p>
          <h3>Devloped with: </h3>
          <p> React + Gatsby and hosted with Google Firebase </p>
          <h3>Send Email: </h3>

          <a href="mailto:searchworldmarketplace@gmail.com">
            <div className="email"> searchworldmarketplace@gmail.com</div>
          </a>
          <p></p>
        </div>
      </div>
      <SearchBar />
    </Layout>
  </>
)

export default contact
