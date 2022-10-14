export const getArticles = (payload) => (dispatch) => {
    return dispatch({
        payload,
        type: 'GET_ARTICLES',
    });
}

export const getUsers = (payload) => (dispatch) => {
    return dispatch({
        payload,
        type: 'GET_USERS',
    });
}

export const getPhotos = (payload) => (dispatch) => {
    return dispatch({
        payload,
        type: 'GET_PHOTOS',
    });
}