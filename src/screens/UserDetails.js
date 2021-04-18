import React, { Component } from 'react'
import { Helmet } from "react-helmet";

export default class UserDetails extends Component {
    constructor(props) {
        super(props)
        this.state = {
            user: {}
        }
    }

    componentDidMount() {
        fetch(`https://jsonplaceholder.typicode.com/users/${this.props.match.params.id}`)
            .then(res => res.json()).then(user => this.setState({ user }))
    }

    render() {
        return <div>
            <Helmet>
                <meta charSet="utf-8" />
                <title>{this.state.user.name}</title>
                <meta name="description" content={`this page displat the details of the user ${this.state.user.name}(#${this.state.user.username})`} />
            </Helmet>
            <h1>{this.state.user.name}</h1>
            <ul>
                {Object.keys(this.state.user).map(k => <li key={k}>{k}: {JSON.stringify(this.state.user[k])}</li>)}
            </ul>
        </div>
    }
}