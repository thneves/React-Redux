import { createStore, combineReducers } from "redux";
import homePage from "./containers/HomePage/reducers";

const reducers = combineReducers(homePage);

export default createStore(reducers);