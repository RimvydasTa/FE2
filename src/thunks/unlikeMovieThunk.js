import {actionContainer} from "../actionContainer";


export const unLikeMovie = (id) => dispatch => {
    dispatch(actionContainer.unLike(id));
};