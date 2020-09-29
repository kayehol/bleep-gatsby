import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"

const PostImage = ({ data }) => {
    console.log(data)
    const postImage = data.allImageSharp.edges
    return(
      <div>
        {postImage.map(img => (
          <Img fluid={img.node.fluid} />
        ))}
      </div>
    )
}

export default PostImage

export const query = graphql`
  query {
    allImageSharp {
      edges {
        node {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  }
`