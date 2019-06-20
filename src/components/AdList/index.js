import React, { Component } from "react";
import { parse } from 'datejs';
import { connect } from 'react-redux';

import database from '../../apis/database';
import { fetchAds } from '../../actions';
import SingleAd from '../SingleAd';

class AdList extends Component {
    
    componentDidMount() {
        this.props.fetchAds();
    }


    determineAdStatus = (start, end) => {
        const currentDate = new Date();        
        const startDate = Date.parse(start);        
        const endDate = Date.parse(end);        
        if (!endDate && (currentDate >= startDate)) {
            return 'Live';
        } else if (!endDate && (currentDate < startDate)) {    
            return 'Scheduled';
        } else if (endDate >= startDate) {
            return 'Finished';
        } else {
            return 'Cancelled';
        }
    }

    renderList = (adList) => {
        if(!this.props.adList.length) {
            return <div>Loading...</div>
        }
        return this.props.adList.map((ad) => {
            return (
                <SingleAd 
                    name={ad.adName}
                    id={ad.id}
                    key={ad.id}
                    status={this.determineAdStatus(ad.startDate, ad.endDate)}
                    startDate={ad.startDate}
                    endDate={ad.endDate}
                />
            );
        });
    }
    
    render() {
        return (
            <div>
                {this.renderList()}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        adList: Object.values(state.adList).reverse()
    }
}



export default connect(mapStateToProps, { fetchAds })(AdList);