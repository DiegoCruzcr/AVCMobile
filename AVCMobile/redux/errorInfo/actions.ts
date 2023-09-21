import ErrorActionTypes from "./action-types";

export const attErrorInfo = (code: number, description: string) => ({
    type: ErrorActionTypes.ATT,
    code: code,
    description: description
})

