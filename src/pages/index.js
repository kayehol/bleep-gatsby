import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import styled from "styled-components"
import Img from "gatsby-image"
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
  #data, #categoria {
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
        {data.allStrapiPost.edges.map(post => (
          <li key={post.node.strapiId}>
            <div id="post">
              <Link to={`/post/${post.node.strapiId}`}>
                <h3 id="titulo">{post.node.titulo}</h3>
              </Link>
              <h4 id="data">{post.node.data}</h4>
              <Img fluid={post.node.imagem.childImageSharp.fluid} />
              <div id="conteudo">{post.node.conteudo}</div>
              <h4 id="categoria">{post.node.categories[0].name}</h4>
            </div>
          </li>
        ))}
      </ul>
    </Feed>
  </Layout>
)

export default IndexPage

export const query = graphql`
  query {
    allStrapiPost(sort: {order: DESC, fields: createdAt}) {
      edges {
        node {
          categories {
            name
          }
          conteudo
          data(formatString: "DD/MM/YYYY")
          strapiId
          titulo
          imagem {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  }
`
