import React, { Component } from "react";
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';

import AdForm from '../../AdForm';
import database from "../../../apis/database";
import { fetchAd, editAd } from '../../../actions';


class EditRoute extends Component {
    

    //This fetch ad function doesn't perform any function in this iteration of code
    //I don't think the 'fetchAd' action is ever actually used - it could be removed
    // componentDidMount() {
    //     this.props.fetchAd(this.props.match.params.id);
    // }

    
    render() {
        return (
            <div>
                <AdForm 
                    initialValues={this.props.ad}                    
                    onSubmit={(formValues) => this.props.editAd(this.props.match.params.id, formValues)} 
                    heading={'Edit Ad'}
                />
            </div>
        );
    }
}


const mapStateToProps = (state, ownProps) => {
    return {
        ad: state.adList[ownProps.match.params.id]
    }
}


export default connect(mapStateToProps, { fetchAd, editAd })(EditRoute);