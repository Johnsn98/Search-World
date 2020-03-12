import React, { Component } from "react"
import { Link } from "gatsby"

let theCountry = "Germany"
let lat = 0
let log = 0

class searchAll extends Component {
  componentDidMount() {
    function highlight() {
      document.getElementById(theCountry).style.outline = "5px solid #3b5998"
    }

    if (document.getElementById(theCountry)) {
      highlight()
    }
  }

  constructor() {
    super()
    this.state = {
      topicBox: null,
      maxPrice: null,
      minPrice: null,
      sortBy: null,
      category: null,
    }

    this.searchFunction = this.searchFunction.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.handleClick = this.handleClick.bind(this)
  }

  handleChange({ target }) {
    this.setState({
      [target.name]: target.value,
    })
  }

  handleClick({ target }) {
    this.setState({
      category: target.name,
    })
    console.log(target.name)
  }

  searchFunction() {
    var priceFilter = ""
    if (this.state.maxPrice || this.state.minPrice) {
      priceFilter =
        "&minPrice=" + this.state.minPrice + "&maxPrice=" + this.state.maxPrice
    }
    var sort = "sort=BEST_MATCH"
    if (this.state.sortBy) {
      sort = "sort=" + this.state.sortBy
    }
    var category = ""
    if (this.state.category) {
      category = "&categoryID=" + this.state.category
    }

    if (this.state.topicBox) {
      window.location.assign(
        "https://www.facebook.com/marketplace/10216374986124/" +
          "search/?query=" +
          this.state.topicBox +
          priceFilter +
          category +
          "&latitude=" +
          lat +
          "&longitude=" +
          log +
          "&radiusKM=5000&vertical=C2C&" +
          sort,
        "G1window"
      )
    } else {
      window.location.assign(
        "https://www.facebook.com/marketplace/10216374986124/" +
          "search/?query=" +
          "Example: Porsche 911 // Return to searchworldmarketplace.com to search again" +
          priceFilter +
          category +
          "&latitude=" +
          lat +
          "&longitude=" +
          log +
          "&radiusKM=5000&vertical=C2C&" +
          sort,
        "G1window"
      )
    }
  }

  render() {
    theCountry = this.props.countryname
    lat = this.props.lat
    log = this.props.log

    const categories = [
      "vehicles",
      "bicycles",
      "classifieds",
      "apparel",
      "allelectronics",
      "entertainment",
      "family",
      "propertyforsale",
      "instruments",
      "propertyrentals",
      "hobbies",
    ]

    const categoryNames = [
      "Vehicles",
      "Bicycles",
      "Classifieds",
      "Apparel",
      "Electronics",
      "Entertainment",
      "Family",
      "Property For Sale",
      "instruments",
      "Property For Rent",
      "Hobbies",
    ]

    const categoryList = categories.map((category, index) => (
      <button
        className="responsiveList"
        alt={category}
        name={category}
        value={category}
        onClick={this.handleClick}
        key={index}
        id={category}
        count={index}
      >
        <img
          className="icons"
          src={require(`../icons/${category}.png`)}
          alt={category}
          name={category}
          value={category}
        ></img>

        {categoryNames[index]}
      </button>
    ))

    return (
      <div>
        <div className="Nav1">
          <form
            className="nav"
            onSubmit={e => {
              e.preventDefault()
              this.searchFunction()
            }}
          >
            <input
              className="searchbar"
              size="20"
              placeholder="Results will open in Facebook Marketplace. Return to this page to search again"
              name="topicBox"
              value={this.state.topicBox}
              onChange={this.handleChange}
            ></input>
            <button
              type="button"
              className="button2"
              onClick={this.searchFunction}
            >
              <i className="fa fa-search"></i>
            </button>

            <br />
          </form>
          <div className="nav2">
            <div className="boxes">
              <div className="boxesTitle">Price</div>
              <input
                className="sort"
                placeholder="min"
                name="minPrice"
                value={this.state.minPrice}
                onBlur={this.handleChange}
              ></input>
              <input
                className="sort"
                placeholder="max"
                name="maxPrice"
                value={this.state.maxPrice}
                onBlur={this.handleChange}
              ></input>
              <p></p>
              <div className="boxesTitle">Sort By</div>

              <select
                id="sort"
                name="sortBy"
                className="sort"
                value={this.state.sortBy}
                onBlur={this.handleChange}
              >
                <option value="BEST_MATCH">Recommended </option>

                <option value="PRICE_DESCEND">Price: Highest first</option>
                <option value="PRICE_ASCEND">Price: Lowest First</option>
                <option value="CREATION_TIME_DESCEND">
                  Date: Newest First
                </option>
                <option value="CREATION_TIME_ASCEND">Date: Oldest First</option>
              </select>

              <p></p>
              <div className="boxesTitle">Clear Filters: </div>
              <Link to="/home">
                <button className="sort"> Reset </button>
              </Link>
            </div>
            <div className="box2">
              <div className="boxesTitle">Category: {this.state.category}</div>
              <div>{categoryList}</div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default searchAll
