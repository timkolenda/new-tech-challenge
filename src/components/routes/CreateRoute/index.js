import React, { Component } from "react";

import AdForm from '../../AdForm';

const CreateRoute = () => {
    return (
        <div className="create-route">
            <div className="route-heading">
                <h2>Create New Ad</h2>
            </div>
            <AdForm />
        </div>
    );
}



export default CreateRoute;