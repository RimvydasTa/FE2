import {actionContainer} from "../actionContainer";

export const  logToConsole = (name,date) => dispatch => {
    dispatch(
        actionContainer.setLog(name, date)
    );
};