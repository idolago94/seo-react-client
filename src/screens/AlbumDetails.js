import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Helmet } from "react-helmet";

export default class AlbumDetails extends Component {
    constructor(props) {
        super(props)
        this.state = {
            album: {},
            photos: []
        }
    }

    componentDidMount() {
        Promise.all([
            fetch(`https://jsonplaceholder.typicode.com/albums/${this.props.match.params.id}`),
            fetch(`https://jsonplaceholder.typicode.com/photos?albumId=${this.props.match.params.id}`)
        ]).then(async (res) => {
            const album = await res[0].json()
            const photos = await res[1].json()
            return { album, photos }
        }).then(({ album, photos }) => {
            this.setState({ album, photos })
        })
    }

    render() {
        return <div>
            <Helmet>
                <meta charSet="utf-8" />
                <title>{this.state.album.title}</title>
                <meta name="description" content={`this page display the album ${this.state.album.title}, including ${this.state.photos.length} photos`} />
            </Helmet>
            <h1>{this.state.album.title}</h1>
            <ul>
                {Object.keys(this.state.album).map(k => <li key={k}>{k}: {this.state.album[k]}</li>)}
            </ul>
            <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
                {this.state.photos.map(p => <Link to={`/photos/${p.id}`}><img src={p.thumbnailUrl} /></Link>)}
            </div>
        </div>
    }
}