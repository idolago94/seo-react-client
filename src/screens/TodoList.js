import React, { Component } from 'react'
import { Link } from 'react-router-dom'

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
            <h1>{'To Dos'}</h1>
            <ul>
                {this.state.todos.map(p => <Link to={`/todos/${p.id}`}><li>{p.title}</li></Link>)}
            </ul>
        </div>
    }
}