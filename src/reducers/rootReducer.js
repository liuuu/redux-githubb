// @flow
import allUserReducer from "./allUserReducer";
import singleUserReducer from "./singleUserReducer";
import { combineReducers } from "redux";
// flow
// type State = {
//   allUserData: { isLoading: boolean, reposData: Array<Object> },
//   singleUserData: Object
// };

const rootReducer = combineReducers({
  allUserData: allUserReducer,
  singleUserData: singleUserReducer
});

export default rootReducer;
