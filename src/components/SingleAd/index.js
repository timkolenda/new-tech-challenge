import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Button } from 'semantic-ui-react'
import { parse } from 'datejs';
import { connect } from 'react-redux';
import { setEndDate } from '../../actions';

import './style.scss';


const SingleAd = ({ name, id, startDate, endDate, status, setEndDate, template, repeat }) => {

    const renderMessage = (status, startDate, endDate) => {
        switch (status) {
            case 'Scheduled':
                return `This ad will go live on ${startDate}`;
            case 'Live':
                return `This ad has been live since ${startDate}`;
            case 'Finished':
                return `This ad ran from ${startDate} to ${endDate}`;
            case 'Cancelled':
                return `This ad was cancelled on ${endDate}, before it started.`;
            default: 
                return `Error`;
        }   
    }

    const renderMessageType = (status) => {
        switch (status) {
            case 'Scheduled':
                return 'info';
            case 'Live':
                return 'success';
            case 'Finished':
                return 'violet';
            case 'Cancelled':
                return 'negative';
            default: 
                return `Error`;
        }
    }

    const updateEndDate = () => {
        const currentDate = new Date().toString("yyyy/MM/dd");
        setEndDate(id, currentDate);
    }
    
    return (
        <div className="single-ad">
            <div className="ui container">
                <div>
                    <h3 className="header">{name}</h3>
                    <div className="ad-details">
                        <p>{template}</p>
                        <p>Scheduled {repeat}</p>
                    </div>
                </div>
                <div>
                    <div className={`ui visible message ${renderMessageType(status)}`}>
                        <div className="header">
                            Status: {status}
                        </div>
                        <p>{renderMessage(status, startDate, endDate)}</p>
                    </div>
                </div>
                <div className="ad-controls">
                    {
                        status === 'Scheduled' 
                        ? <Link to={`/edit/${id}`} className="ui button primary" >Edit</Link>
                        : null
                    }    
                    {
                        status === 'Scheduled' 
                        ? <Button color="red" content='Cancel' onClick={updateEndDate} /> 
                        : null
                    }
                    {
                        status === 'Live' 
                        ? <Button color="red" content='Finish' onClick={updateEndDate} /> 
                        : null
                        }
                </div>
            </div>
        </div>
    );
}


export default connect(null, { setEndDate })(SingleAd);