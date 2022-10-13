export const getArticles = (payload) => (dispatch) => {
    return dispatch({
        payload,
        type: 'GET_ARTICLES',
    });
}