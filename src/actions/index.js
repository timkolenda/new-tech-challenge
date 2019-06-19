import database from '../apis/database';
import history from '../utils/history';
import { 
    CREATE_AD,
    FETCH_ADS,
    FETCH_AD,
    DELETE_AD,
    EDIT_AD
} from './types';

export const createAd = formValues => async dispatch => {
    // const { endDate } = ''
    const response = await database.post('/content', { ...formValues })
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

export const deleteAd = (id) => async dispatch => {
    await database.delete(`/content/${id}`);
    dispatch({
        type: DELETE_AD,
        payload: id
    });
}

export const editAd = (id, formValues) => async dispatch => {
    const response = await database.put(`/content/${id}`, formValues);
    dispatch({
        type: EDIT_AD,
        payload: response.data
    });
}



