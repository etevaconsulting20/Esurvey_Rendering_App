import { takeEvery, call, put, all, select } from "redux-saga/effects";
import { getSurveySuccess, getSurveyFailure, saveSurveySuccess, saveSurveyFailure } from "../actions/";
import { actionTypes } from "../actions/types"
import axios from "axios";
import { appConfig } from "../constants/appConfig"


const surveyReducer = (state) => state.surveyReducers
const getSurveyFromServer = async (id) => {
    const config = {
        headers: {
            'content-type': 'application/json',
            'ApiKey': "Test"
        }
    }
    return await axios.get(`${appConfig.apiUrl}/Surveys/${id}`, config)
}
const saveSurveyToServer = async (model) => {
    const config = {
        headers: {
            'content-type': 'application/json',
            'ApiKey': "Test",
            
        }
    }
    return await axios.post(`${appConfig.apiUrl}/SurveyResponses`,model, config)
}
function* getSurvey() {
    try {
        let survey = yield select(surveyReducer);

        const response = yield call(getSurveyFromServer, survey.surveyId)
       
        if (response) {
            yield put(getSurveySuccess(response))
        }
    } catch (error) {
        yield put(getSurveyFailure(error))
    }
}
function* saveSurvey() {
    try {
        let survey = yield select(surveyReducer);
        if (survey.surveyId) {
            let model = {
                "surveyId": survey.surveyId,
                "type":survey.type,
                "response": survey.response
            }
            const response = yield call(saveSurveyToServer, model)
           
            if (response) {
                yield put(saveSurveySuccess(response))
            }
        }
    } catch (error) {
        yield put(saveSurveyFailure(error))
    }
}

export const surveySagas = [
    takeEvery('GET_SURVEY', getSurvey),
    takeEvery(actionTypes.SAVE_SURVEY_RESPONSE, saveSurvey),
]

export default function* rootSaga() {
    yield all([...surveySagas])
}