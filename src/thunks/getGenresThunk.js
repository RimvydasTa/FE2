import axios from "axios";
import {endpoints} from "../../config";
import {actionContainer} from "../actionContainer";

export const getGenres = () => dispatch => {
    axios
        .get(endpoints.genres())
        .then(({ data: { genres } }) => dispatch(actionContainer.setGenres(genres)))
        .catch(error => console.log(error));
};