import React from "react"
import Layout from "../components/layout"
import styled from "styled-components"
import "typeface-roboto"

const Wrapper = styled.div`
    font-family: Roboto, sans-serif;
    display: flex;
    justify-content: center;
    text-align: center;
    margin:auto;
    height: 740px;
    padding-top: 6em;
    color: #fff;
    @media screen and (min-width: 720px) {
        padding: 0 20em;
    }
`

const Contato = () => {
    return (
        <Layout>
            <Wrapper>
                <p>Mande seu material pra gente! bleep@gmail.com</p>
            </Wrapper>
        </Layout>
    )
}

export default Contato