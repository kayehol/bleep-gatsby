import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import styled from "styled-components"
import Img from "gatsby-image"
import "typeface-roboto"
import SEO from "../components/seo"
import Helmet from "react-helmet"

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
    padding: 2em 0;
  }
  iframe {
    width: 100%;
    padding: 2em 0;
  }
  @media screen and (min-width: 720px) {
    padding: 0 20em;
  }
`

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Bleep News" />
    <Helmet>
      <script>{`
         !function(){var analytics=window.analytics=window.analytics||[];if(!analytics.initialize)if(analytics.invoked)window.console&&console.error&&console.error("Segment snippet included twice.");else{analytics.invoked=!0;analytics.methods=["trackSubmit","trackClick","trackLink","trackForm","pageview","identify","reset","group","track","ready","alias","debug","page","once","off","on","addSourceMiddleware","addIntegrationMiddleware","setAnonymousId","addDestinationMiddleware"];analytics.factory=function(e){return function(){var t=Array.prototype.slice.call(arguments);t.unshift(e);analytics.push(t);return analytics}};for(var e=0;e<analytics.methods.length;e++){var key=analytics.methods[e];analytics[key]=analytics.factory(key)}analytics.load=function(key,e){var t=document.createElement("script");t.type="text/javascript";t.async=!0;t.src="https://cdn.segment.com/analytics.js/v1/" + key + "/analytics.min.js";var n=document.getElementsByTagName("script")[0];n.parentNode.insertBefore(t,n);analytics._loadOptions=e};analytics.SNIPPET_VERSION="4.13.1";
         analytics.load("Cr7oh9BjNZl9T88BsTfs7HipoVcAlDZG");
         analytics.page();
         }}();
      `}</script>
    </Helmet>
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
