import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import "typeface-roboto"
import "typeface-roboto-mono"
import logo from "../images/bleep-logo3.svg"
import logoQuad from "../images/bleep-logo2.png"
import "./layout.css"
import { Helmet } from 'react-helmet'

const Nav = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-family: "Roboto Mono", sans-serif;
  font-weight: bold;
  font-size: 1.3em;
  background-color: #000;

  #header {
    display: flex;
    flex-direction: row;
    padding: 2em;
    align-items: center;
    justify-content: space-between;
  }
  ul {
    display: flex;
    flex-direction: row;
    list-style-type: none;
    margin: 0;
    padding: 0;
  }
  ul li {
    padding: 0 2em;
  }
  a {
    color: #fff;
  }
  a:hover {
    text-decoration: underline;
  }
  #logo {
    width: 40%;
  }
  @media screen and (min-width: 720px) {
    img {
      width: 25%;
      margin: auto;
      display: block;
    }
    #header {
      justify-content: flex-end;
    }
    #logo {
      
    }
  }
`

const Layout = ({ children }) => {
  return (
    <Nav>
      <Helmet>
        <meta charSet='utf-8' />
        <meta lang='pt-br' />
        <meta property='og:image' content={logoQuad} />
        <meta name='description' content='Bleep' />
      </Helmet>
      <div id="header">
        <div id="logo">
          <Link to="/">
            <img src={logo} alt="bleep" />
          </Link>
        </div>
        <div id="contato">
          <Link to="/contato">Contato</Link>
        </div>
      </div>
      <main>{children}</main>
    </Nav>
  )
}

export default Layout
