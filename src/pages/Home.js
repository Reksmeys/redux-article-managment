import React, { useEffect } from 'react'
import { Container } from 'react-bootstrap'
import { connect } from 'react-redux'
import Card from '../components/Card'
import NavBar from '../components/NavBar'
import {fetchArticles, searchArticles} from './../services/actions/articleActions'

function Home(props) {
    useEffect(() => {
        props.fetchArticles()
    }, [])

  return (
    <Container>
        <h1>Reksmey Modified</h1>
        <h1>Modified</h1>
        <Card articles={props.articles} />
        <h1>Rithy Modified</h1>
        <h1>Hello Cambodia</h1>
        <h2>Jiko</h2>
    </Container>
  )
}

// subscribe to store
const mtp = (store) => {
    return{
        articles: store.articleR.articles
    }
}
export default connect(mtp, {fetchArticles})(Home)

