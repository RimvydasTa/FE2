import { combineReducers } from 'redux';
import {likeMovie} from "./thunks/likeMovieThunk";

const initialState = {
    list: [],
    hearted: []
};


const likeMovieReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_LIKE':
            return {
                ...state,
                hearted: [...state.hearted, action.id]
            };
        case 'REMOVE_LIKE':
            return {
                ...state,
                hearted: state.hearted.filter((likeID) => likeID !== action.id)
            };
        default:
            return state;
    }
};

const moviesReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_MOVIES':
            return {
                ...state,
                list: action.movies
            };
        default:
            return state;
    }
};

const genresReducer = (state = [], action) => {
    switch(action.type) {
        case 'SET_GENRES':
            return action.genres;
        default:
            return state;
    }
};

export default combineReducers({
    movies: moviesReducer,
    genres: genresReducer,
    likes: likeMovieReducer
});
