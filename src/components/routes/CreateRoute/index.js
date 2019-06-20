import React, { Component } from "react";
import { connect } from 'react-redux';
import { createAd } from '../../../actions';

import AdForm from '../../AdForm';

const CreateRoute = ({ createAd }) => {
    return (
        <div className="create-route">
            <AdForm onSubmit={createAd} heading={'Create Ad'} />
        </div>
    );
}



export default connect(null, { createAd })(CreateRoute);