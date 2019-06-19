import React, { Component } from "react";

import AdList from '../../AdList';

const ListRoute = ({ setId }) => {
    return(
        <div className="ListRoute">
            <AdList setId={setId}/>
        </div>
    );
}



export default ListRoute;