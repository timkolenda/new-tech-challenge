import React, { Component } from "react";
import { Router, Route, Link, Switch } from "react-router-dom";

import './style.scss';
import Header from '../Header';
import history from '../../utils/history';
import ListRoute from '../routes/ListRoute';
import EditRoute from '../routes/EditRoute';
import CreateRoute from '../routes/CreateRoute';


const App = () => {
    return (
        <div className="app">
            <Router history={history}>
                <div>
                    <Header />
                    <div className="ui-container">
                        <Switch>
                            <Route path="/" exact component={ListRoute} />
                            <Route path="/new" exact component={CreateRoute} />
                            <Route path="/edit" exact component={EditRoute} />
                        </Switch>
                    </div>
                </div>
            </Router>
        </div>
    );
}

export default App;