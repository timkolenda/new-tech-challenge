import React, { Component } from "react";
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import App from './components/App';
import './styles/globalStyles.scss';

ReactDOM.render(
    <App />,
    document.querySelector('#root')
);