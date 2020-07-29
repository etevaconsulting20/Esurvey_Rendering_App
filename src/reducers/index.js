import { combineReducers } from "redux";
import { surveyReducers } from "./surveyReducers";

export const rootReducer = combineReducers({
    surveyReducers:surveyReducers,
})