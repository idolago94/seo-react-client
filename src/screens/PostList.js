import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Helmet } from "react-helmet";

export default class PostList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            posts: []
        }
    }

    componentDidMount() {
        this.handleFetch()
    }

    handleFetch() {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(res => res.json()).then(posts => this.setState({ posts: posts.slice(0, 10) }))
    }

    render() {
        return <div>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Posts List</title>
                <meta name="description" content="list of all posts" />
            </Helmet>
            <h1>{'Posts'}</h1>
            <ul>
                {this.state.posts.map(p => <Link to={`/posts/${p.id}`}><li>{p.title}</li></Link>)}
            </ul>
        </div>
    }
}