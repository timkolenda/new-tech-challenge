import React, { Component } from "react";
import { parse } from 'datejs';

import SingleAd from '../SingleAd';

const AdList = ({ adList }) => {
    


    const determineAdStatus = (start, end) => {
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

    const renderList = () => {
        if(!adList.length) {
            return (
                <div className="loader">
                    <div className="ui segment">
                        <div className="ui active inverted dimmer">
                            <div className="ui text loader">Loading</div>
                        </div>
                        <p></p>
                    </div>
                </div>
            )
        }
        return adList.map((ad) => {
            return (
                <SingleAd 
                    name={ad.adName}
                    id={ad.id}
                    key={ad.id}
                    status={determineAdStatus(ad.startDate, ad.endDate)}
                    startDate={ad.startDate}
                    endDate={ad.endDate}
                    template={ad.template}
                    repeat={ad.repeat}
                />
            );
        });
    }
    

    return (
        <div>
            {renderList()}
        </div>
    );
}





export default AdList;