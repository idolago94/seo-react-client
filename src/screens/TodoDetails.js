import React, { Component } from 'react'
import { Helmet } from "react-helmet";

export default class TodoDetails extends Component {
    constructor(props) {
        super(props)
        this.state = {
            todo: {}
        }
    }

    componentDidMount() {
        fetch(`https://jsonplaceholder.typicode.com/posts/${this.props.match.params.id}`)
            .then(res => res.json()).then(todo => this.setState({ todo }))
    }

    render() {
        return <div>
            <Helmet>
                <meta charSet="utf-8" />
                <title>{this.state.todo.title}</title>
                <meta name="description" content={this.state.todo.body} />
            </Helmet>
            <h1>{this.state.todo.title}</h1>
            <ul>
                {Object.keys(this.state.todo).map(k => <li key={k}>{k}: {this.state.todo[k]}</li>)}
            </ul>
        </div>
    }
}