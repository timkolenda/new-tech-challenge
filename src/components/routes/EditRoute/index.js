import React, { Component } from "react";

import AdForm from '../../AdForm';
import database from "../../../apis/database";

class EditRoute extends Component {
    state = { selectedAd: {} }
    
    // componentDidMount() {
    //     this.fetchAd(this.props.id);
    // }

    // fetchAd = async (id) => {
    //     const response = await database.get(`/content/${id}`)
    //     console.log(response.data)
    //     this.setState({ selectedAd: response.data });
    // }

    
    render() {
        return (
            <div>
                <AdForm values={this.state.selectedAdData}/>
            </div>

        )
    }   
}



export default EditRoute;