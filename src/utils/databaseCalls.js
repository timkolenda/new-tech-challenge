import database from '../apis/database';
import history from './history';

export const createAd = async (formValues) => {
    const response = await database.post('/content', { ...formValues });
    history.push('/');
};