import React, { Component } from 'react';
import { Route, NavLink, Switch, Redirect } from 'react-router-dom';
//import axios from 'axios';

import Posts from './Posts/Posts';
//import NewPost from './NewPost/NewPost';
import './Blog.css';
import asyncComponent from '../../hoc/asyncComponent';

const AsyncNewPost = asyncComponent(() => import('./NewPost/NewPost'));

class Blog extends Component {
    state = {
        auth: true,
    };

    render() {
        return (
            <div className="Blog">
                <header>
                    <nav>
                        <ul>
                            <li><NavLink
                                to="/posts"
                                exact
                                activeClassName="my-active"
                                activeStyle={{
                                    color: 'green',
                                    textDecoration: 'underline'
                                }}>Index</NavLink></li>
                            <li><NavLink
                                to={{
                                    pathname: "/new-post",
                                    hash: "#createBlooog",
                                    search: "?create=bolog"
                                }}
                            >Create blog</NavLink></li>
                        </ul>
                    </nav>
                </header>
                <Switch>
                    {this.state.auth ? <Route path="/new-post" component={AsyncNewPost} /> : null}
                    <Route path="/posts" component={Posts} />
                    {/* 404 handler */}
                    <Route render={() => <h1>Not found!</h1>} />
                    {/* <Redirect from="/" to="/posts" /> */}
                </Switch>
            </div>
        );
    }
}

export default Blog;