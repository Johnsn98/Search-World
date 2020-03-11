import React from "react"

import Layout from "../components/layout"
import SearchAll from "../components/searchAll"
import SEO from "../components/seo"
import { Link } from "gatsby"

import "../components/style.css"

export default ({ pageContext: { theCountry } }) => (
  <>
    <Layout>
      <SEO
        title={`Facebook Marketplace ${theCountry.name}`}
        description={`Search all of ${theCountry.name}`}
        keywords={`All, results, by country, Facebook, Facebook Marketplace, ${theCountry.name}`}
        placename={theCountry.name}
        position={`${theCountry.latlng[0]}, ${theCountry.latlng[1]}`}
      />
      <div className="container">
        <div className="centered">
          <div className="style1">
            <h1 className="style1">Search all of {theCountry.name}</h1>
            <div> Items for Sale </div>
          </div>
          <div className="style2">Remove the 100-mile boundary</div>
          <Link to="/">
            <input type="submit" value="Learn More" className="button1" />
          </Link>
        </div>
      </div>
      <SearchAll
        countryname={theCountry.name}
        lat={theCountry.latlng[0]}
        log={theCountry.latlng[1]}
        data={theCountry}
      />
      <Link style={{ textDecoration: "none" }} to="/">
        {" "}
        <h1>Country Selected: {theCountry.name} </h1>
      </Link>
    </Layout>
  </>
)
