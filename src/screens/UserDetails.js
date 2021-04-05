import React, { Component } from 'react'

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
            <h1>{this.state.user.name}</h1>
            <ul>
                {Object.keys(this.state.user).map(k => <li key={k}>{k}: {JSON.stringify(this.state.user[k])}</li>)}
            </ul>
        </div>
    }
}