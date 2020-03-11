import React, { Component } from "react"
import { Link } from "gatsby"

export class countrybar extends Component {
  render() {
    const countries = [
      "United-States",
      "Germany",
      "Mexico",
      "Japan",
      "Canada",
      "India",
      "Indonesia",
      "Brazil",
      "Vietnam",
      "Philippines",
      "Thailand",
      "Egypt",
      "Australia",
      "United-Kingdom",
      "South-Africa",
      "Finland",
    ]

    const countryList = countries.map(country => (
      <Link to={`/${country}`} key={country}>
        <div className="responsive">
          <div className="gallery" id={country}>
            <img
              src={require(`../images/${country}.jpg`)}
              alt={`Search, ${country}, on, Facebook, Marketplace, Free, searchworldmarketplace`}
              width="600"
              height="400"
            ></img>

            <div className="desc">{country}</div>
          </div>
        </div>
      </Link>
    ))

    return (
      <div>
        <div className="countrybar">
          OR SEARCH BY COUNTRY
          <div>
            <div>{countryList}</div>
            <div className="clearfix"></div>
          </div>
        </div>
      </div>
    )
  }
}

export default countrybar
