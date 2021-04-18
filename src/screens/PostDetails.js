import React, { Component } from 'react'
import { Helmet } from "react-helmet";

export default class PostDetails extends Component {
    constructor(props) {
        super(props)
        this.state = {
            post: {}
        }
    }

    componentDidMount() {
        fetch(`https://jsonplaceholder.typicode.com/posts/${this.props.match.params.id}`)
            .then(res => res.json()).then(post => this.setState({ post }))
    }

    render() {
        return <div>
            <Helmet>
                <meta charSet="utf-8" />
                <title>{this.state.post.title}</title>
                <meta name="description" content={this.state.post.body} />
            </Helmet>
            <h1>{this.state.post.title}</h1>
            <ul>
                {Object.keys(this.state.post).map(k => <li key={k}>{k}: {this.state.post[k]}</li>)}
            </ul>
        </div>
    }
}