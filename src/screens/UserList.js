import React, { Component } from 'react'
import { Link } from 'react-router-dom'

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
            <h1>{'Users'}</h1>
            <ul>
                {this.state.users.map(u => <Link to={`/users/${u.id}`}><li>{u.name}</li></Link>)}
            </ul>
        </div>
    }
}