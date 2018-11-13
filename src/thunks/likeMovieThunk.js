import {actionContainer} from "../actionContainer";


export const likeMovie = (id) => dispatch => {
    dispatch(actionContainer.addLike(id));
};