/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */

// You can delete this file if you're not using it

exports.createPages = async ({ actions: { createPage }, graphql }) => {
  const detailsPage = require("./src/data/wishASportData.json")

  detailsPage.wishasport.forEach(page => {
    createPage({
      path: `wishaball/${page.path}`,
      component: require.resolve("./src/templete/detailsPage"),
      context: {
        title: page.organization,
        info: page.info,
        address: page.address,
        phone: page.phone,
        website: page.website,
        sport: page.sport,
        image: page.img,
      },
    })
  })

  const blogPostTemplate = require.resolve("./src/templete/blogPage.js")

  const result = await graphql(`
    {
      allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] }
        limit: 1000
      ) {
        edges {
          node {
            frontmatter {
              path
            }
          }
        }
      }
    }
  `)

  if (result.errors) {
    console.log("some error with graphql")
  }

  result.data.allMarkdownRemark.edges.forEach(({ node }) => {
    createPage({
      path: node.frontmatter.path,
      component: blogPostTemplate,
      context: {},
    })
  })
}

