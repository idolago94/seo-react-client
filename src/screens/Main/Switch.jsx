import React from 'react';
import { BrowserRouter, Switch, Route, Link, Redirect } from 'react-router-dom'
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
import MarketsList from '../MarketsList';
import SportMarkets from '../SportMarkets'
import MarketDetails from '../MarketDetails';
import Results from '../Results';
import Event from '../Event';
import Team from '../Team';

export default (
    <Switch>
        <Route path='/results/:sportName/:date' component={Results} />
        <Route path='/results/:sportName' component={Results} />
        <Route path='/event/:eventId' component={Event} />
        <Route path='/team/:teamName' component={Team} />

        {/* <Route path='/markets' exact component={MarketsList} />
        <Route path='/sport/:sportId' exact component={SportMarkets} />
        <Route path='/market/:marketId' exact component={MarketDetails} /> */}
        
        {/* <Route path="/posts" exact component={PostList} />
        <Route path='/posts/:id' component={PostDetails} />
        <Route path="/users" exact component={UserList} />
        <Route path="/users/:id" component={UserDetails} />
        <Route path="/photos" exact component={Photos} />
        <Route path="/photos/:id" component={PhotoDetails} />
        <Route path="/todos" exact component={TodoList} />
        <Route path="/todos/:id" component={TodoDetails} />
        <Route path="/albums" exact component={AlbumList} />
        <Route path="/albums/:id" component={AlbumDetails} /> */}
        <Route path="/" exact component={Welcome} />
        <Route
            render={({ staticContext }) => {
                // there is no `staticContext` on the client, so
                // we need to guard against that here
                if (staticContext) staticContext.status = 555;
                return <Redirect from={'/about'} to={'/staticpage'} />;
            }}
        />
    </Switch>
);