import {getMovies} from "./thunks/getMoviesThunk";
import {getGenres} from "./thunks/getGenresThunk";
import {getMoviesByGenre} from "./thunks/getMoviesByGenreThunk";
import {likeMovie} from "./thunks/likeMovieThunk";
import {unLikeMovie} from "./thunks/unlikeMovieThunk";

export const rootThunk =  {
    getMovies,
    getGenres,
    getMoviesByGenre,
    likeMovie,
    unLikeMovie
};