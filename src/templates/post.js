import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import styled from "styled-components"
import Img from "gatsby-image"
import "typeface-roboto"
import "typeface-roboto-mono"
import arrow from "../images/arrow.svg"

const PostWrapper = styled.div`
  color: #fff;
  font-family: Roboto, sans-serif;
  padding: 0 2em;
  display: flex;
  flex-direction: column;
  #data, #categoria {
    font-family: "Roboto Mono", sans-serif;
    font-size: 0.8em;
    color: grey;
  }
  #titulo {
    text-decoration: none;
    font-family: "Roboto Mono", sans-serif;
  }
  #conteudo {
    padding: 2em 0;
    line-height: 1.2;
  }
  #btVoltar {
    width: 15%;
    transform: scaleX(-1);
  }
  iframe {
    width: 100%;
    padding: 2em 0;
  }
  @media screen and (min-width: 720px) {
    padding: 0 20em;
    img {
      margin: 0;
      padding: 0;
    }
    #btVoltar {
      width: 10%;
    }
  }
`

const Post = ({ data }) => {
  const post = data.markdownRemark
  return (
    <Layout>
      <PostWrapper>
        <Link to="/">
          <img id="btVoltar" src={arrow} alt="voltar" />
        </Link>
        <h3 id="titulo">{post.frontmatter.title}</h3>
        <h4 id="data">{post.frontmatter.date}</h4>
        {post.frontmatter.thumbnail !== null &&
          <Img fluid={post.frontmatter.thumbnail.childImageSharp.fluid} />
        }
        <div id="conteudo" dangerouslySetInnerHTML={{__html: post.html}} />
        <h4 id="categoria">{post.frontmatter.tags}</h4>
      </PostWrapper>
    </Layout>
  )
}

export const query = graphql`
query($slug: String!)  {
  markdownRemark(fields: {slug: {eq: $slug}}) {
    html
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
    fields {
      slug
    }
  }
}

`

export default Post