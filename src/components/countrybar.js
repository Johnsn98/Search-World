import React, { Component } from "react"
import { Link } from "gatsby"
import data from "../components/data"

export class countrybar extends Component {
  constructor() {
    super()
    this.state = {
      selectedCountry: null,
      country: "/",
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange({ target }) {
    if (target.value === "All Countries") {
      this.setState({
        country: "/",
      })
    }

    this.setState({
      country: target.value,
    })
  }

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

    const fullList = data.map(country => <option>{country.name}</option>)

    const countryList = countries.map(country => (
      <Link to={`/${country}`} key={country}>
        <div className={country}>
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
            Find Another Country:
            <select
              id="sort"
              name="selectedCountry"
              className="sort"
              value={this.state.selectedCountry}
              onBlur={this.handleChange}
            >
              <option>All Countries</option>
              {fullList}
            </select>{" "}
            <Link to={`/${this.state.country}`}>GO</Link>
          </div>
        </div>
      </div>
    )
  }
}

export default countrybar
