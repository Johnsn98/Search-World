const path = require(`path`)

const allCountries = require("./src/components/data")

exports.createPages = async ({ actions: { createPage } }) => {
  // Create a page for each
  allCountries.forEach(theCountry => {
    createPage({
      path: `/${theCountry.name}`,
      component: require.resolve("./src/templates/template.js"),
      context: { theCountry },
    })
  })
}
