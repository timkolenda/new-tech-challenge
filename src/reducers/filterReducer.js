import {
    FILTER_BY_SEARCH_TERM
} from '../actions/types';

export default (state = {}, action) => {
    switch (action.type) {
        case FILTER_BY_SEARCH_TERM:
            // return Object.assign({}, action.payload);
            return {...action.payload} //performs the same action as above but more readable 
        default: 
            return state       
    }
}