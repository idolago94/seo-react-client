import React, { Component } from 'react'
import { Helmet } from "react-helmet";

export default class PhotoDetails extends Component {
    constructor(props) {
        super(props)
        this.state = {
            photo: {}
        }
    }

    componentDidMount() {
        fetch(`https://jsonplaceholder.typicode.com/photos/${this.props.match.params.id}`)
            .then(res => res.json()).then(photo => this.setState({ photo }))
    }

    render() {
        return <div>
            <Helmet>
                <meta charSet="utf-8" />
                <title>{this.state.photo.title}</title>
                <meta name="description" content={`this page display photo with the title ${this.state.photo.title}`} />
            </Helmet>
            <h1>{this.state.photo.title}</h1>
            <ul>
                {Object.keys(this.state.photo).map(k => <li key={k}>{k}: {this.state.photo[k]}</li>)}
            </ul>
            <img src={this.state.photo.url} />
        </div>
    }
}