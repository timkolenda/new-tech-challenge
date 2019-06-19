import React, { Component } from "react";
import { Router, Route, Switch } from "react-router-dom";

import './style.scss';
import Header from '../Header';
import history from '../../utils/history';
import ListRoute from '../routes/ListRoute';
import EditRoute from '../routes/EditRoute';
import CreateRoute from '../routes/CreateRoute';


const App = () => {

    // state = {id: ''}

    // setId = (id) => {
    //     this.setState({ id }, () => {
    //         history.push(`/edit/${this.state.id}`)
    //     });
    // }
    
    return (
        <div className="app">
            <Router history={history}>
                <div>
                    <Header />
                    <div className="ui-container">
                        <Switch>                        
                            <Route path="/" exact component={ListRoute} />
                            <Route path="/new" exact component={CreateRoute} /> 
                            <Route path="/edit/:id" exact component={EditRoute} />                        
                        </Switch>
                    </div>
                </div>
            </Router>
        </div>
    );
}

export default App;