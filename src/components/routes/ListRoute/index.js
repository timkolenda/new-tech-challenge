import React, { Component } from "react";
import { connect } from 'react-redux';

import AdList from '../../AdList';
import { fetchAds } from '../../../actions'; 

class ListRoute extends Component {
    
    componentDidMount() {
        this.props.fetchAds();
    }
    
    render() {
        return(
            <div className="ListRoute">
                <AdList adList={this.props.adList}/>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        adList: Object.values(state.adList).reverse()
    }
}

export default connect(mapStateToProps, { fetchAds })(ListRoute);