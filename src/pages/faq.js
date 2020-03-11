import React from "react"

import Layout from "../components/layout"
import SearchBar from "../components/searchbar"
import SEO from "../components/seo"

import "../components/style.css"

const faq = () => (
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

      <h1>FAQs</h1>

      <div className="countrybar">
        <div className="about">
          <h3> How do I receive an item that is far away?</h3>
          <p>
            Items can be shipped with shipping carriers like USPS and Fedex.
          </p>

          <h3> What about payment? </h3>
          <p>
            Facebook offers payment however paypal is recommended with buyer
            protection.
          </p>
          <h3>Can I trust the sellers?</h3>
          <p>
            This is up to your discretion, especially if you are asking a seller
            to ship an item to you sight unseen.
          </p>
          <h3>The website is not working</h3>
          <p>
            The site works best in google chrome and you must be logged into
            Facebook.
          </p>

          <h3>I don't see any results</h3>
          <p>
            You must return to searchworldmarketplace.com to perform a new
            search.
          </p>
          <h3>Now I'm seeing results in Dubai?</h3>
          <p>This may happen if you don't do the previous.</p>
          <h3>Who made this website?</h3>
          <p> Nathan Johnson - Milwaukee, Wisconsin. See contact page</p>
          <h3>How did you do it?</h3>
          <p>A top secret algorithm</p>
          <h3>Are you affiliated with facebook?</h3>
          <p>
            {" "}
            Search World Marketplace is not at all affiliated with Facebook
          </p>
        </div>
      </div>

      <SearchBar />
    </Layout>
  </>
)

export default faq
