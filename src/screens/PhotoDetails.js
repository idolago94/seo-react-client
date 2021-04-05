import React, { Component } from 'react'

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
            <h1>{this.state.photo.title}</h1>
            <ul>
                {Object.keys(this.state.photo).map(k => <li key={k}>{k}: {this.state.photo[k]}</li>)}
            </ul>
            <img src={this.state.photo.url} />
        </div>
    }
}