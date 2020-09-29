/*
import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import styled from "styled-components"
import Img from "gatsby-image"
import "typeface-roboto"
import "typeface-roboto-mono"
import arrow from "../images/arrow.svg"

const CategoriaWrapper = styled.div`
  color: #fff;
  font-family: Roboto, sans-serif;
  padding: 0 2em;
  #data {
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
`

const Categoria = ({ data }) => {
  const posts = data.posts.edges
  const category = data.category.name
  console.log(posts)
  return (
    <Layout>
      <CategoriaWrapper>
        <Link to='/'>
            <img id='btVoltar' src={arrow} alt='voltar' />
        </Link>
        <h1>{category}</h1>
        <div id="post">
          <Link to={`/post/${posts.node.strapiId}`}>
            <h3 id="titulo">{posts.node.titulo}</h3>
          </Link>
          <h4 id="data">{posts.node.data}</h4>
          <Img fluid={posts.node.imagem.childImageSharp.fluid} />
          <div id="conteudo">{posts.node.conteudo}</div>
          <Link to={`/categoria/${posts.node.strapiId}`}>
            <h4 id="categoria">{posts.node.categories[0].name}</h4>
          </Link>
        </div>
      </CategoriaWrapper>
    </Layout>
  )
}

export default Categoria

export const query = graphql`
  query Category($id: Int!) {
    posts: allStrapiPost(
      filter: { categories: { elemMatch: { id: { eq: $id } } } }
    ) {
      edges {
        node {
          strapiId
          titulo
          conteudo
          categories {
            name
          }
          data(formatString: "DD/MM/YYYY")
        }
      }
    }
    category: strapiCategory(strapiId: { eq: $id }) {
      name
    }
    image
  }
`
*/
