import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';
import adReducer from './adReducer';

export default combineReducers({
    form,
    adList: adReducer
});