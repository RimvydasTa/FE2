import axios from "axios";
import {endpoints} from "../../config";
import {actionContainer} from "../actionContainer";

export const getMovies = () => dispatch => {
    axios
        .get(endpoints.mostPopularMovies())
        .then(({ data: { results } }) => dispatch(actionContainer.setMovies(results)))
        .catch(error => console.log(error));
};