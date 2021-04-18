import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Helmet } from "react-helmet";

export default class Photos extends Component {
    constructor(props) {
        super(props)
        this.state = {
            photos: []
        }
    }

    componentDidMount() {
        this.handleFetch()
    }

    handleFetch() {
        fetch('https://jsonplaceholder.typicode.com/photos')
            .then(res => res.json()).then(photos => this.setState({ photos: photos.slice(0, 10) }))
    }

    render() {
        return <div>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Photos List</title>
                <meta name="description" content="list of all photos" />
            </Helmet>
            <h1>{'Photos'}</h1>
            <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
                {this.state.photos.map(p => <Link to={`/photos/${p.id}`}>
                    <img src={p.thumbnailUrl} />
                    <p>{p.title}</p>
                </Link>)}
            </div>
        </div>
    }
}