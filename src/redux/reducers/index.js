import { combineReducers } from "redux";
import myCards from "./myCards";
import snackBar from "./snackBar";

const allReducers = combineReducers({
  myCards,
  snackBar,
});

export default allReducers;
