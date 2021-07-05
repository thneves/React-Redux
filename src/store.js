import { createStore, combineReducers } from "react";
import homePage from "./containers/HomePage/reducersducers";

const reducers = combineReducers({ homePage });

export default createStore(reducers);