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

export default class Main extends Component {
    render() {
        return <div>
            <BrowserRouter>
                <Link to='/'>Home</Link>
                {Switch}
            </BrowserRouter>
        </div>
    }
}