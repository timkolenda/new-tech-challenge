import React, { Component } from "react";
import { connect } from 'react-redux';
import { createAd } from '../../../actions';

import AdForm from '../../AdForm';

const CreateRoute = ({ createAd }) => {
    return (
        <div className="create-route">
            <div className="route-heading">
                <h2>Create New Ad</h2>
            </div>
            <AdForm onSubmit={createAd}/>
        </div>
    );
}



export default connect(null, { createAd })(CreateRoute);