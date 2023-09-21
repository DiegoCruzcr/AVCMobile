import { combineReducers } from "redux";
import userReducer from "./user/reducer"
import errorReducer from "./errorInfo/reducer";

const rootReducer = combineReducers({
    user: userReducer, 
    error: errorReducer, 
  });

export default rootReducer;

