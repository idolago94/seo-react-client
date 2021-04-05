import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Helmet } from "react-helmet";

export default class Welcome extends Component {
    render() {
        return <div>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Welcome seo-react</title>
                <link rel="canonical" href='https://seo-react-app.herokuapp.com/' />
            </Helmet>
            <h1>Welcome</h1>
            <ul>
                <Link to='/posts'>
                    <li>Posts</li>
                </Link>
                <Link to='/users'>
                    <li>Users</li>
                </Link>
                <Link to='/photos'>
                    <li>Photos</li>
                </Link>
                <Link to='/todos'>
                    <li>Todos</li>
                </Link>
                <Link to='/albums'>
                    <li>Albums</li>
                </Link>
                <Link to='/about'>
                    <li>About</li>
                </Link>
            </ul>
        </div>
    }
}