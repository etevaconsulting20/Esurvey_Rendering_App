import { actionTypes } from "../actions/types";
import { act } from "react-dom/test-utils";
import { select } from "redux-saga/effects";
import { appConfig } from "../constants/appConfig";

const initState = {
    loading: false,
    surveyId: null,
    surveyScript: null,
    response: null,
    type:null,
}

export const surveyReducers = (state = initState, action) => {
    switch (action.type) {
        case actionTypes.GET_SURVEY:

            return { ...state, surveyId: action.payload, loading: true }

        case actionTypes.GET_SURVEY_SUCCESS:
            let questions = JSON.parse(action.payload.data.questions)
            let logo = action.payload.data.logo ? `data:image/png;base64,${action.payload.data.logo}` : null

            if (logo) {
                return { ...state, surveyScript: { ...action.payload.data, questions: questions, logo: logo }, loading: false }
            }
            return { ...state, surveyScript: { ...action.payload.data, questions: questions, }, loading: false }

        case actionTypes.GET_SURVEY_FAILURE:
            return { ...state, loading: false }

        case actionTypes.SAVE_SURVEY_RESPONSE:
            debugger
            return { ...state, loading: true, surveyId: action.payload.id,type: action.payload.type ,response: action.payload.response }

        case actionTypes.SAVE_SURVEY_RESPONSE_SUCCESS:
            setTimeout(() => {
                window.location = `${appConfig.appUrl}/#/thankyou`
            }, 500)
            return { ...state, loading: false }

        case actionTypes.SAVE_SURVEY_RESPONSE_FAILURE:
            return { ...state, loading: false }

        default: return { ...state }
    }
}