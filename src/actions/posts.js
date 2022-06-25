import * as api from '../api';


// Action creator
const getPosts = () => async (dispatch) => {
    const action = { type: 'FETCH_ALL', payload: [] }
    dispatch(action) 
}