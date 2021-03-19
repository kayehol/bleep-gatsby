import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import styled from "styled-components"
import Img from "gatsby-image"
import "typeface-roboto"
import "typeface-roboto-mono"
import arrow from "../images/arrow.svg"
import SEO from "../components/seo"

const PostWrapper = styled.div`
  color: #fff;
  font-family: Roboto, sans-serif;
  padding: 4em 1em;
  display: flex;
  flex-direction: column;
  #data, #categoria {
    font-family: "Roboto Mono", sans-serif;
    font-size: 0.8em;
    color: grey;
    padding: 0;
    margin: 0;
  }
  #titulo {
    text-decoration: none;
    font-family: "Roboto Mono", sans-serif;
  }
  #conteudo {
    padding: 0;
    line-height: 1.2;
  }
  a #btVoltar {
    width: 5%;
    transform: scaleX(-1);
  }
  a #btVoltar:hover {
    scale: 1.1;
  }
  iframe {
    width: 100%;
    padding: 1em 0;
  }
  @media screen and (min-width: 720px) {
    padding: 1em 20em;
    img {
      margin: 0;
      padding: 0;
    }
    #btVoltar {
      width: 10%;
    }
    #conteudo {
      line-height: 1.4;
    }
    #titulo {
      font-size: 1.4em;
    }
  }
`

const Post = ({ data }) => {
  const post = data.markdownRemark
  const image = post.frontmatter.thumbnail
    ? post.frontmatter.thumbnail.childImageSharp.resize
    : null

  return (
    <Layout>
      <SEO 
        title={post.frontmatter.title}
        description={post.excerpt}
        image={image}
      />
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
    excerpt
  }
}

`

export default Post