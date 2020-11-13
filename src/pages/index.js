import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import styled from "styled-components"
import Img from "gatsby-image"
import "typeface-roboto"
import SEO from "../components/seo"

const Feed = styled.div`
  display: flex;
  justify-content: center;
  font-family: Roboto, sans-serif;
  font-size: 0.9em;
  color: #fff;
  ul {
    list-style-type: none;
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: 0;
  }
  ul li {
    border-bottom: 1px solid #808080;
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
    line-height: 1.3;
    padding: 0;
  }
  iframe {
    width: 100%;
    padding: 1em 0;
  }
  @media screen and (min-width: 720px) {
    padding: 0 22em;
    line-height: 1.6;
    #categoria {
      padding-bottom: 1em;
    }
    img {
      padding-bottom: 1em;
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
            <div id="post">
              <Link to={post.node.fields.slug}>
                <h3 id="titulo">{post.node.frontmatter.title}</h3>
              </Link>
              <h4 id="data">{post.node.frontmatter.date}</h4>
              {post.node.frontmatter.thumbnail !== null &&
                <Img fluid={post.node.frontmatter.thumbnail.childImageSharp.fluid} />
              }
              <div id="conteudo" dangerouslySetInnerHTML={{__html: post.node.rawMarkdownBody}} />
              <h4 id="categoria">{post.node.frontmatter.tags}</h4>
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
