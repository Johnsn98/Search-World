import React from "react"

import Layout from "../components/layout"
import SearchBar from "../components/searchbar"
import SEO from "../components/seo"

import "../components/style.css"

const about = () => (
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

      <h1>About Page</h1>

      <div className="countrybar">
        <div className="about">
          <h3> A Global Marketplace With Zero Fees</h3>
          <p>
            Facebook Marketplace: The most convenient, most users, and most
            familiar marketplace website throughout the world.{" "}
          </p>
          <p>
            SearchWorldMarketplace.com allows users to connect globally or
            nationally providing the most selection and lowest price listings on
            Facebook Marketplace.
          </p>
          <h3> Find Rare Items or Lowest Price </h3>
          <p>
            The best deals are on Facebook Marketplace. You just have to find
            them.
          </p>
          <h3>Make Money with Search-World-Marketplace</h3>
          <p>
            Normal marketplace listings only reach a small number of potential
            customers. There is a large opportunity to buy on FB marketplace and
            resell on more prominent websites like Amazon and Ebay.
          </p>
          <h3>Consumer to Consumer</h3>
          <p>
            Remove the middle man. Ebay takes 12% and Amazon takes 8-15% per
            item sold. Facebook connects sellers to buyers without taking fees.{" "}
          </p>

          <p>Have questions? Check out the FAQ page </p>
        </div>
      </div>
      <SearchBar />
    </Layout>
  </>
)

export default about
