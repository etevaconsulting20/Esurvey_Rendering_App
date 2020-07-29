import { takeEvery, call, put, all } from "redux-saga/effects";
import { getSurveySuccess, getSurveyFailure } from "../actions";

const getSurveyFromServer =()=>{
    console.log("getSurveyFromServer...............")
    return 'WELCOME'
}
function* getSurvey(){
    try {
        const response = yield call(getSurveyFromServer,)
        console.log('getSurvey......')
        if(response){
            yield put(getSurveySuccess(response))
        }
    } catch (error) {
        yield put(getSurveyFailure(error))
    }
}

export const surveySagas = [
    takeEvery('GET_SURVEY',getSurvey)
]

export default function* rootSaga(){
    yield all([...surveySagas])
}