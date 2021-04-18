import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Helmet } from "react-helmet";

export default class UserList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            users: []
        }
    }

    componentDidMount() {
        this.handleFetch()
    }

    handleFetch() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json()).then(users => this.setState({ users: users.slice(0, 10) }))
    }

    render() {
        return <div>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Users List</title>
                <meta name="description" content="list of all users" />
            </Helmet>
            <h1>{'Users'}</h1>
            <ul>
                {this.state.users.map(u => <Link to={`/users/${u.id}`}><li>{u.name}</li></Link>)}
            </ul>
        </div>
    }
}