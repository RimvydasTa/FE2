import axios from "axios";
import {endpoints} from "../../config";
import {actionContainer} from "../actionContainer";

export const setMoviesToGenre = (id) => dispatch => {
    axios
        .get(endpoints.genreMovies(id))
        .then(({ data: { results } }) => {
            dispatch(
                actionContainer.setMovies(results))
        })
        .catch(error => console.log(error));
};