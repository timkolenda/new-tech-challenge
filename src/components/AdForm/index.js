import React, { Component } from "react";
import { Button, Form, Select } from 'semantic-ui-react';

import './style.scss';
import history from '../../history';
import database from '../../apis/database';


const templateTypeOptions = [
    { key: 'single', text: 'Single Image Ad', value: 'Single Image Ad' },
    { key: 'carousel', text: 'Carousel Ad', value: 'Carousel Ad' },
]

const repeatOptions = [
    { key: 'daily', text: 'Daily', value: 'Daily' },
    { key: 'weekly', text: 'Weekly', value: 'Weekly' },
    { key: 'monthly', text: 'Monthly', value: 'Monthly' },
]

class AdForm extends Component {
    state={
        adName: '',
        startDate: '',
        template: '',
        repeat: ''
    }

    onChange = (event) => {
        this.setState({
            [event.target.id]: event.target.value 
        });
    }

    onChangeTemplate = (event) => {
        this.setState({
            template: event.target.textContent
        });
    }

    onChangeRepeat = (event) => {
        this.setState({
            repeat: event.target.textContent
        });
    }

    createAd = async (formValues) => {
        const response = await database.post('/content', { ...formValues });
        console.log(response.data);
        // history.push('/');
    };


    render() {
        return (            
            <Form>
                <Form.Group widths={2}>
                    <Form.Input label="Name" id="adName" type="text" placeholder="Name" onChange={this.onChange}/>
                    <div className="field">                     
                        <label htmlFor="">Start Date</label>
                        <input label="Start Date" id="startDate" type="date" placeholder="Name" onChange={this.onChange} />  
                    </div>
                </Form.Group>
                <Form.Group>                    
                    <Form.Field 
                        control={Select}
                        options={templateTypeOptions}
                        label={{ children: 'Template', htmlFor: 'template' }}
                        placeholder={'Choose Template'}
                        search
                        searchInput={{ id: 'template' }}
                        onChange={this.onChangeTemplate}
                    />
                    <Form.Field
                        control={Select}
                        options={templateTypeOptions}
                        label={{ children: 'Template', htmlFor: 'template' }}
                        placeholder={'Choose Template'}
                        search
                        searchInput={{ id: 'template' }}
                        onChange={this.onChangeRepeat}
                    />
                </Form.Group>
                <div>
                    <Button negative floated="right">Cancel</Button>
                    <Button 
                        primary 
                        floated="right" 
                        onClick={() => this.createAd(this.state)} 
                    >Create</Button>
                </div>
            </Form>



            /* <div className="ui form">
                <div className="two fields">
                    <div className="field">
                        <label htmlFor="">Name</label>
                        <input type="text" placeholder="Name"/>
                    </div>
                    <div className="field">
                        <label htmlFor="">Start Date</label>
                        <input type="date" placeholder="Name" />
                    </div>
                </div>
                <div className="two fields">
                    <div className="field">
                        <label>Template</label>
                        <div className="ui selection dropdown" onClick={this.onToggleDropDown}>
                            <input type="hidden" name="gender" />
                            <i className="dropdown icon"></i>
                            <div className="default text">Template</div>
                            <div className="menu">
                                <div className="item" data-value="1">Male</div>
                                <div className="item" data-value="0">Female</div>
                            </div>
                        </div>
                    </div>
                    <div className="field">
                        <label>Repeat</label>
                        <div className="ui selection dropdown" onClick={this.onToggleDropDown}>
                            <input type="hidden" name="gender" />
                            <i className="dropdown icon"></i>
                            <div className="default text">Repeat</div>
                            <div className="menu">
                                <div className="item" data-value="1">Male</div>
                                <div className="item" data-value="0">Female</div>
                            </div>
                        </div>
                    </div>  
                </div>
            </div> */

            // <div></div>
        );
    }
}


export default AdForm;