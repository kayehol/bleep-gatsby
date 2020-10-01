
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const result = await graphql(
    `
    query {
      allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] }
        limit: 1000
      ) {
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }
    }
    `
  )

  if (result.errors) {
    throw result.errors
  }

  result.data.allMarkdownRemark.edges.forEach(({node}) => {
    createPage({
      path: node.fields.slug,
      component: require.resolve("./src/templates/post.js"),
      context: {
        slug: node.fields.slug,
      },
    })
  })
  /*
  categorias.forEach((categoria, index) => {
    createPage({
      path: `/categoria/${categoria.node.strapiId}`,
      component: require.resolve("./src/templates/categoria.js"),
      context: {
        id: categoria.node.strapiId,
      },
    })
  })
  */
}