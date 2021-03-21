import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import "typeface-roboto"
import "typeface-roboto-mono"
import logo from "../images/bleep-logo3.svg"
import "./layout.css"


const Nav = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-family: "Roboto Mono", sans-serif;
  font-weight: bold;
  font-size: 1.3em;
  background-color: #101010;

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
    padding: 0 1em;
  }
  a {
    color: #fff;
  }
  a:hover {
    text-decoration: underline;
    color: #6C8784;
  }
  #logo {
    width: 40%;
  }
  #logo:hover {
    scale: 1.1;
    transition: scale 0.5s;
  }
  main {
    padding-bottom: 4em;
    width: auto;
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
