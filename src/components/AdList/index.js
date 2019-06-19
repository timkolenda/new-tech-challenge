import React, { Component } from "react";
import { parse } from 'datejs';
import { connect } from 'react-redux';

import database from '../../apis/database';
// import { fetchAds } from "../../utils/databaseCalls";
import SingleAd from '../SingleAd';

class AdList extends Component {
    state = { list: [] }
    
    componentDidMount() {
        this.fetchAds();
    }

    checkIfAdIsLive = (date) => {
        const adDate = Date.parse(date);
        const currentDate = new Date();
        if (currentDate >= adDate) {
            return true;
        } else {
            return false;
        }
    }

    fetchAds = async () => {
        const response = await database.get('/content');
        const orderedResponse = response.data.reverse();
        this.setState({ list: orderedResponse });
    }

    renderList = (list) => {
        if(!this.state.list.length) {
            return <div>Loading...</div>
        }
        const renderedList = list.map((ad) => {
            return (
                <SingleAd 
                    name={ad.adName}
                    id={ad.id}
                    key={ad.id}
                    live={this.checkIfAdIsLive(ad.startDate)}
                    startDate={ad.startDate}
                />
            );
        });
        return renderedList;
    }
    
    render() {
        return (
            <div>
                {this.renderList(this.state.list)}
            </div>
        );
    }
}



export default connect(null, {})(AdList);