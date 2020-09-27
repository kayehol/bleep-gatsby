exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const result = await graphql(
    `
      query {
        allStrapiPost {
          edges {
            node {
              strapiId
            }
          }
        }
        allStrapiCategory {
          edges {
            node {
              strapiId
            }
          }
        }
      }
    `
  )

  if (result.errors) {
    throw result.errors
  }

  // Create blog articles pages.
  const posts = result.data.allStrapiPost.edges
  const categorias = result.data.allStrapiCategory.edges

  posts.forEach((post, index) => {
    createPage({
      path: `/post/${post.node.strapiId}`,
      component: require.resolve("./src/templates/post.js"),
      context: {
        id: post.node.strapiId,
      },
    })
  })

  categorias.forEach((categoria, index) => {
    createPage({
      path: `/categoria/${categoria.node.strapiId}`,
      component: require.resolve("./src/templates/categoria.js"),
      context: {
        id: categoria.node.strapiId,
      },
    })
  })
}
