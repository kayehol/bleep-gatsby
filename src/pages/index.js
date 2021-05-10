import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import styled from "styled-components"
import "typeface-roboto"
import SEO from "../components/seo"

const Feed = styled.div`
  display: flex;
  justify-content: center;
  font-family: "Roboto Mono", sans-serif;
  font-size: 1em;
  color: #fff;
  ul {
    list-style-type: none;
    flex-direction: column;
    padding: 0;
  }
  ul li {
    border-bottom: 1px solid #333333;
    padding: 0;
  }
  .titulo {
    text-decoration: underline;
    font-family: "Roboto Mono", sans-serif;
    padding: 0;
    margin: 0;
  }
  .subTitulo {
    font-size: 0.8em;
    color: grey;
    font-family: "Roboto Mono", sans-serif;
    line-height: 1;
  }
  .post {
    padding-top: 1em;
    margin: 0;
    width: auto;
  }
  @media screen and (max-width: 720px) {
    font-size: 0.8em;
    ul {
      padding: 0 1em;
    }
  }
`

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Bleep News" />
    <Feed>
      <ul>
        {data.allMarkdownRemark.edges.map(post => (
          <li key={post.node.id}>
            <div className="post">
              <Link to={post.node.fields.slug}>
                <h3 className="titulo">{post.node.frontmatter.title}</h3>
              </Link>
              <div className="subTitulo">
                <h4>{post.node.frontmatter.date} | {post.node.frontmatter.tags}</h4>
              </div>
            </div>
          </li>
          ))
        }
      </ul>
    </Feed>
  </Layout>
)

export default IndexPage

export const query = graphql`
  query {
    allMarkdownRemark(sort: { fields: frontmatter___date, order: DESC }) {
      edges {
        node {
          id
          fields {
            slug
          }
          frontmatter {
            date(formatString: "DD/MM/YYYY")
            tags
            title
            thumbnail {
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
          rawMarkdownBody
        }
      }
    }
  }
`
