import React, { Component } from 'react'
import { BrowserRouter, Link } from 'react-router-dom'
import PostList from '../PostList';
import PostDetails from '../PostDetails'
import Welcome from '../Welcome';
import UserList from '../UserList';
import UserDetails from '../UserDetails'
import Photos from '../Photos'
import PhotoDetails from '../PhotoDetails';
import TodoList from '../TodoList';
import TodoDetails from '../TodoDetails'
import AlbumList from '../AlbumList';
import AlbumDetails from '../AlbumDetails';
import Switch from './Switch';
import sports from '../../Sports.json'
export default class Main extends Component {
    items = [
        { title: 'עמוד הבית', route: '/' },
        { title: 'כל הארועים', route: '/markets' },
        ...sports.map(s => ({ title: s.title, route: '/sport/' + s.sportId }))
    ]
    render() {
        return <div>
            <BrowserRouter>
                {/* <Link to='/'>Home</Link> */}
                <ul style={{ display: 'flex', flexDirection: 'row-reverse' }}>
                {this.items.map((item, i) => (
                    <Link style={{ padding: 10, fontSize: 20, color: 'white', textDecoration: 'none' }} to={item.route}>
                        <li style={{ listStyle: 'none' }}>{item.title}</li>
                    </Link>
                ))}

                {/* <Link to='/posts'>
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
                </Link> */}
            </ul>
                {Switch}
            </BrowserRouter>
        </div>
    }
}