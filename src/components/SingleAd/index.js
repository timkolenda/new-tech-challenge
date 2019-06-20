import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Button } from 'semantic-ui-react'
import { parse } from 'datejs';

import './style.scss';

const SingleAd = ({ name, id, startDate, endDate, status }) => {
    
    const renderMessage = (status, startDate, endDate) => {
        switch (status) {
            case 'Scheduled':
                return `This ad will go live on ${startDate}`;
            case 'Live':
                return `This ad has been live since ${startDate}`;
            case 'Finished':
                return `This ad ran from ${startDate} to ${endDate}`;
            case 'Canceled':
                return `This ad was cancelled before it started.`;
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
        case 'Canceled':
            return 'negative';
        default: 
            return `Error`;
        }
    }

    return (
        <div className="single-ad">
            <div className="ui container">
                <div>
                    <h3 className="header">{name}</h3>
                </div>
                <div className="ad-details">
                    <div className={`ui visible message ${renderMessageType(status)}`}>
                        <div className="header">
                            Status: {status}
                        </div>
                        <p>{renderMessage(status, startDate, endDate)}</p>
                    </div>
                </div>
                <div>
                    {status === 'Scheduled' ? <Link to={`/edit/${id}`} className="ui button" >Edit</Link> : null}    
                    {status === 'Scheduled' ? <Button content='Cancel' /> : null}
                    {status === 'Live' ? <Button content='Finish' /> : null}
                </div>
            </div>
        </div>
    );
}


export default SingleAd;