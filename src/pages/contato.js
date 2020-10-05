import React from "react"
import Layout from "../components/layout"
import styled from "styled-components"
import "typeface-roboto"

const Wrapper = styled.div`
    font-family: Roboto, sans-serif;
    display: flex;
    justify-content: center;
    flex-direction: column;
    text-align: center;
    margin:auto;
    padding-top: 3em;
    color: #fff;
    @media screen and (min-width: 720px) {
        padding: 0 20em;
    }
`

const Contato = () => {
    return (
        <Layout>
            <Wrapper>
                <p>Mande seu material pra gente!</p>
                <p><a href='mailto:emailbleep@gmail.com'>emailbleep@gmail.com</a></p>
                <p><a href='https://instagram.com/bleepnews'>Instagram</a></p>
                <p><a href='https://www.youtube.com/channel/UC1iG06LxlvkRYhfK1w-qP8Q'>YouTube</a></p>
            </Wrapper>
        </Layout>
    )
}

export default Contato