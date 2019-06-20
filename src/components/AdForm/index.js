import React, { Component } from "react";
import { Button, Form, Select } from 'semantic-ui-react';
import { Field, reduxForm } from 'redux-form';

import './style.scss';
import history from '../../utils/history';




//THESE WERE REMOVED BECAUSE SEMANTIC UI AND REDUX-FORM WEREN'T PLAYING NICE - ADJUSTED INPUT TO MORE BASIC VERSION FOR DROPDOWNS
// const templateTypeOptions = [
//     { key: 'single', text: 'Single Image Ad', value: 'Single Image Ad' },
//     { key: 'carousel', text: 'Carousel Ad', value: 'Carousel Ad' },
// ]

// const repeatOptions = [
//     { key: 'daily', text: 'Daily', value: 'Daily' },
//     { key: 'weekly', text: 'Weekly', value: 'Weekly' },
//     { key: 'monthly', text: 'Monthly', value: 'Monthly' },
// ]

class AdForm extends Component{


    renderAdNameInput = ({ input, meta, label }) => {
        return (
            <div className="field">
                <label htmlFor={label}>{label}</label>
                <input 
                    {...input} 
                    autoComplete="off" 
                    placeholder="Enter Name" 
                    id={label}
                />
                {this.renderError(meta)}
            </div>
        )
    }

    renderStartDateInput = ({ input, meta, label }) => {
        return (
            <div className="field">
                <label htmlFor={label}>{label}</label>
                <input                     
                    id={label} 
                    type="date"                     
                    {...input}
                />
                {this.renderError(meta)}
            </div>
        );
    }

    renderTemplateInput = ({ input, meta, label }) => {
        return (
            <div className="eight wide field margin-bottom">
                <label htmlFor={label}>{label}</label>
                <select
                    id={label}
                    {...input}
                >
                    <option value="">Choose Template</option>
                    <option value="Single Image Ad">Single Image Ad</option>
                    <option value="Carousel Ad">Carousel Ad</option>
                </select>
                {this.renderError(meta)}
            </div>
        )
    }

    renderRepeatInput = ({ input, meta, label }) => {
        return (
            <div className="eight wide field margin-bottom">
                <label htmlFor={label}>{label}</label>
                <select 
                    id={label}
                    {...input}
                    >
                    <option value="">Choose Repeat Frequency</option>
                    <option value="Daily">Daily</option>
                    <option value="Weekly">Weekly</option>
                    <option value="Monthly">Monthly</option>
                </select>
                {this.renderError(meta)}
            </div>
        )
    }

    onSubmit = (formValues) => {
        this.props.onSubmit(formValues);
    }

    renderError = ({ touched, error }) => {
        if (touched && error) {
            return (
                <div className="ui error message">
                    <div>{error}</div>
                </div>
            )
        }
    }

    render() {
        return (
            <div className="ad-form ui container">
                <div>
                    <h2 className="header">{this.props.heading}</h2>
                </div>
                <Form error>
                    <div className="two wide fields">                    
                        <Field name="adName" label={'Ad Name'} component={this.renderAdNameInput} />                    
                        <Field name="startDate" label={'Start Date'} component={this.renderStartDateInput} />
                    </div>
                    <div className="eight wide fields">
                        <Field name="template" label={'Template'} component={this.renderTemplateInput} />
                        <Field name="repeat" label={'Repeat'} component={this.renderRepeatInput} />
                    </div>                 
                    <div className="form-controls">
                        <Button 
                            primary 
                            onClick={this.props.handleSubmit(this.onSubmit)}
                        >Submit</Button>
                        <Button negative onClick={() => history.push('/')}>Cancel</Button>
                    </div>
                </Form>
            </div>            
        );
    }
}

const validate = (formValues) => {
    const errors = {};
    if(!formValues.adName) {
        errors.adName = 'You must provide a name for your ad.'
    }
    if(!formValues.startDate) {
        errors.startDate = 'You must provide a start date.'
    }
    if(!formValues.repeat) {
        errors.repeat = 'You must set a repeat frequency.'
    }
    if(!formValues.template) {
        errors.template = 'You must choose a template.'
    }
    return errors;
}


export default reduxForm({
    form: 'createAd',
    validate,
    touchOnChange: false
})(AdForm);