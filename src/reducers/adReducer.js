import _ from 'lodash';
import {
    CREATE_AD,
    FETCH_ADS,
    FETCH_AD,
    DELETE_AD,
    EDIT_AD
} from '../actions/types';

export default (state = {}, action) => {
    switch (action.type) {
        case FETCH_AD: 
            return { ...state, [action.payload.id]: action.payload };
        case CREATE_AD: 
            return { ...state, [action.payload.id]: action.payload };
        case EDIT_AD:
            return { ...state, [action.payload.id]: action.payload };
        case DELETE_AD: 
            return _.omit(state, action.payload);   
        case FETCH_ADS: 
            return { ...state, ..._.mapKeys(action.payload, 'id') }; 
        default:
            return state;
    }
}

