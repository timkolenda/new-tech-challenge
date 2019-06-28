import React, { Component } from "react";
import { connect } from 'react-redux';
import { Button, Menu, Dropdown } from 'semantic-ui-react'

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
                        <div className="filter-controls">
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
                            {/* <div className="right menu filter-controls__dropdown">
                                <Button basic>
                                    <i className="icon undo alternate"></i>
                                </Button>
                                <Dropdown item text='Filter By Status'>
                                    <Dropdown.Menu>
                                        <Dropdown.Item>Scheduled</Dropdown.Item>
                                        <Dropdown.Item>Live</Dropdown.Item>
                                        <Dropdown.Item>Finished</Dropdown.Item>
                                        <Dropdown.Item>Cancelled</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </div> */}
                            
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