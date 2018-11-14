import {getMovies} from "./thunks/getMoviesThunk";
import {getGenres} from "./thunks/getGenresThunk";
import {setMoviesToGenre} from "./thunks/setMoviesToGenreThunk";
import {likeMovie} from "./thunks/likeMovieThunk";
import {unLikeMovie} from "./thunks/unlikeMovieThunk";

export const rootThunk =  {
    getMovies,
    getGenres,
    setMoviesToGenre: setMoviesToGenre,
    likeMovie,
    unLikeMovie
};