import {getMovies} from "./thunks/getMoviesThunk";
import {getGenres} from "./thunks/getGenresThunk";
import {setMoviesToGenre} from "./thunks/setMoviesToGenreThunk";
import {likeMovie} from "./thunks/likeMovieThunk";
import {unLikeMovie} from "./thunks/unlikeMovieThunk";
import {logToConsole} from './thunks/logToConsoleThunk'
import {logAndSetMoviesToGenres} from './thunks/logAndSetMoviesThunk'

export const rootThunk =  {
    getMovies,
    getGenres,
    setMoviesToGenre,
    likeMovie,
    unLikeMovie,
    logToConsole,
    logAndSetMoviesToGenres
};