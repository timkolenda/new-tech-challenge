import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';
import adReducer from './adReducer';
import filterReducer from './filterReducer';

export default combineReducers({
    form,
    adList: adReducer,
    filteredList: filterReducer
});