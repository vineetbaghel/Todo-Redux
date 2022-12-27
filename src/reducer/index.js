import { combineReducers } from "redux";
import TodoReducers from "./TodoReducer";
const rootReducer = combineReducers({
  TodoReducers,
});
export default rootReducer;
