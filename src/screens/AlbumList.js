import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class AlbumList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            albums: []
        }
    }

    componentDidMount() {
        this.handleFetch()
    }
    
    handleFetch() {
        fetch('https://jsonplaceholder.typicode.com/albums')
            .then(res => res.json()).then(albums => this.setState({ albums: albums.slice(0, 10) }))
    }

    render() {
        return <div>
            <h1>{'Albums'}</h1>
            <ul>
                {this.state.albums.map(p => <Link to={`/albums/${p.id}`}><li>{p.title}</li></Link>)}
            </ul>
        </div>
    }
}