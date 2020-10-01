import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import styled from "styled-components"
//import Img from "gatsby-image"
import "typeface-roboto"

const Feed = styled.div`
  display: flex;
  justify-content: center;
  font-family: Roboto, sans-serif;
  padding-top: 3em;
  font-size: 0.9em;
  color: #fff;
  ul {
    list-style-type: none;
    display: flex;
    flex-direction: column;
    margin: 0;
    padding: 0;
  }
  #data,
  #categoria {
    font-size: 0.8em;
    color: grey;
    font-family: "Roboto Mono", sans-serif;
  }
  #titulo {
    text-decoration: underline;
    font-family: "Roboto Mono", sans-serif;
  }
  #conteudo {
    padding: 2em 0;
    line-height: 1.2;
  }
  @media screen and (min-width: 720px) {
    padding: 0 20em;
  }
`

const IndexPage = ({ data }) => (
  <Layout>
    <Feed>
      <ul>
        {data.allMarkdownRemark.edges.map(post => (
          <li key={post.node.id}>
            <div id="post">
              <Link to={post.frontmatter.slug}>
                <h3 id="titulo">{post.node.frontmatter.title}</h3>
              </Link>
              <h4 id="data">{post.node.frontmatter.date}</h4>
              
              <div id="conteudo">{post.node.rawMarkdownBody}</div>
              <h4 id="categoria">{post.node.frontmatter.description}</h4>
            </div>
          </li>
        ))
      </ul>
    </Feed>
  </Layout>
)

export default IndexPage

export const query = graphql`
allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date]}) {
  edges {
    node {
      id
      frontmatter {
        date(formatString: "DD/MM/YYYY")
        description
        title
      }
      rawMarkdownBody
    }
  }
}
`
