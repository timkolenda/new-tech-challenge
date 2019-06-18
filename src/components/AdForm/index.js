import React, { Component } from "react";

import './style.scss';

class AdForm extends Component {
    state={
        name: '',
        startDate: '',
        template: '',
        repeat: ''
    }
    render() {
        return (
            <div className='ad-form'>
                <div className='field-container'>
                    <label className="visuallyhidden" htmlFor="ad-name">Name</label>
                    <input type="text" id="ad-name"/>
                </div>
                <div className='field-container'></div>
                <div className='field-container'></div>
                <div className='field-container'></div>
            </div>
        );
    }
}


export default AdForm;