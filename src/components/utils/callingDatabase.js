

export const createAd = async (formValues) => {
    const response = await database.post('/content', { ...formValues });
    console.log(response.data);
    // history.push('/');
};