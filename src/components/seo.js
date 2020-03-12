/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import Helmet from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

function SEO({
  description,
  lang,
  meta,
  title,
  keywords,
  placename,
  position,
}) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
          }
        }
      }
    `
  )

  const metaDescription = description || site.siteMetadata.description

  let theKeywords = keywords

  let desc = `Search All Of Facebook Marketplace | ${placename}`

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={`%s | ${site.siteMetadata.title}`}
      meta={[
        {
          name: `description`,
          content: desc,
        },
        {
          name: `metaDescription`,
          content: metaDescription,
        },
        {
          property: `og:title`,
          content: "Find anything in the World On Facebook Marketplace",
        },
        {
          property: `og:description`,
          content:
            "searchworldmarketplace is a way to search all listings on facebook marketplace, nationwide or globaly",
        },
        {
          property: `og:type`,
          content: `www.searchworldmarketplace.com`,
        },
        {
          name: `twitter:card`,
          content: `twitter`,
        },
        {
          name: "og:image",
          content:
            "https://firebasestorage.googleapis.com/v0/b/search-world-marketplace.appspot.com/o/default.jpg?alt=media&token=64139978-c352-4822-8977-c967e4bfb5cd",
        },
        {
          name: "defaultImage",
          content:
            "https://firebasestorage.googleapis.com/v0/b/search-world-marketplace.appspot.com/o/default.jpg?alt=media&token=64139978-c352-4822-8977-c967e4bfb5cd",
        },
        {
          name: `robots`,
          content: `index,follow`,
        },
        {
          name: `keywords`,
          content: theKeywords,
        },
        {
          name: "geo.placename",
          content: placename,
        },
        {
          name: "geo.position",
          content: position,
        },
        {
          name: "ICBM",
          content: position,
        },
      ].concat(meta)}
    />
  )
}

SEO.defaultProps = {
  lang: `en`,
  meta: [],
  description: ``,
}

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
}

export default SEO
