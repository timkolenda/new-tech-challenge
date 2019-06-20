import React, { Component } from "react";
import { connect } from 'react-redux';
import { Button } from 'semantic-ui-react'

import AdList from '../../AdList';
import { fetchAds, filterByName } from '../../../actions'; 
import history from '../../../utils/history';
import './styles.scss';

class ListRoute extends Component {

    state = { searchTerm: '' }
    
    componentDidMount() {
        this.props.fetchAds();
    }

    handleChange = (event) => {
        this.setState({ [event.target.id]: event.target.value }, () => {
            this.props.filterByName(this.props.adList, this.state.searchTerm)
        });
    }
    


    
    render() {
        return(
            <div className="list-route">
                <div className="list-route__header">
                    <div className="ui container">
                        <div className="list-route__title">
                            <h2 className="header">Ad List</h2>
                            <Button color="blue" content="New Ad" onClick={() => history.push('/new')}/>
                        </div>
                        <div className="filterControls">
                            <div className="ui input">
                                <label className="visuallyhidden" htmlFor="searchTerm">Search</label>
                                <input 
                                    type="text" 
                                    id="searchTerm" 
                                    onChange={this.handleChange} 
                                    value={this.state.serachTerm} 
                                    placeholder="Search..."
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <AdList 
                    adList={
                        !this.props.filteredList.length && this.state.searchTerm === '' 
                        ? this.props.adList 
                        : this.props.filteredList
                    }
                    />
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        adList: Object.values(state.adList).reverse(),
        filteredList: Object.values(state.filteredList)
    }
}

export default connect(mapStateToProps, { fetchAds, filterByName })(ListRoute);