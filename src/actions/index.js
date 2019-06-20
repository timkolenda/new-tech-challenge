import database from '../apis/database';
import history from '../utils/history';
import { 
    CREATE_AD,
    FETCH_ADS,
    FETCH_AD,
    SET_END_DATE,
    EDIT_AD
} from './types';

export const createAd = formValues => async dispatch => {
    const response = await database.post('/content', { ...formValues, endDate: null });
    dispatch({
        type: CREATE_AD,
        payload: response.data
    });
    history.push('/');
}

export const fetchAds = () => async dispatch => {
    const response = await database.get('/content');
    dispatch({
        type: FETCH_ADS,
        payload: response.data
    });
}

export const fetchAd = (id) => async dispatch => {
    const response = await database.get(`/content/${id}`);
    dispatch({
        type: FETCH_AD,
        payload: response.data
    });
}

export const setEndDate = (id, date) => async dispatch => {
    const response = await database.patch(`/content/${id}`, {endDate: date} );
    dispatch({
        type: SET_END_DATE,
        payload: response.data
    });
}

export const editAd = (id, formValues) => async dispatch => {
    const response = await database.put(`/content/${id}`, formValues);
    dispatch({
        type: EDIT_AD,
        payload: response.data
    });
    history.push('/');
}


