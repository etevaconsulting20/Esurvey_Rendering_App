import { all } from "redux-saga/effects";
import { surveySagas } from "./surveySagas";

export default function* rootSaga(){
    yield all([
        surveySagas(),
    ])
}