import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Helmet } from "react-helmet";

export default class TodoList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            todos: []
        }
    }

    componentDidMount() {
        this.handleFetch()
    }

    handleFetch() {
        fetch('https://jsonplaceholder.typicode.com/todos')
            .then(res => res.json()).then(todos => this.setState({ todos: todos.slice(0, 10) }))
    }

    render() {
        return <div>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Todos List</title>
                <meta name="description" content="list of all todos tasks" />
            </Helmet>
            <h1>{'To Dos'}</h1>
            <ul>
                {this.state.todos.map(p => <Link to={`/todos/${p.id}`}><li>{p.title}</li></Link>)}
            </ul>
        </div>
    }
}