import { combineReducers } from 'redux';

const initialState = {
    list: [],
    likedMovieList: []
};

const logReducer = (state = [], action) => {
    switch(action.type) {
        case 'LOG_ENTRY':
            return [action.date, action.name];
        default:
            return state;
    }
};

const likeMovieReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_LIKE':
            return {
                ...state,
                likedMovieList: [...state.likedMovieList, action.id]
            };
        case 'REMOVE_LIKE':
            return {
                ...state,
                likedMovieList: state.likedMovieList.filter(
                    (likeID) => likeID !== action.id)
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
    likes: likeMovieReducer,
    loger: logReducer
});
