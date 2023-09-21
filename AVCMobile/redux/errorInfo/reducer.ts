import ErrorActionTypes from "./action-types";

const initialState = {
    code: 404,
    description: 'Error Not Found'
};

    const errorReducer = (state = initialState, action: any) => {
        switch(action.type) {
            case ErrorActionTypes.ATT:
                return {
                    ...state,
                    code: action.code,
                    description: action.description,
                }
            default:
                return state;
        }        
    } 

export default errorReducer;