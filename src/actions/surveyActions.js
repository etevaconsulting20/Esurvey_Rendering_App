import { actionTypes } from "./types";

export const getSurvey = (id) => ({
    type:actionTypes.GET_SURVEY,
    payload:id
})
export const getSurveySuccess = (model) => ({
    type:actionTypes.GET_SURVEY_SUCCESS,
    payload:model
})
export const getSurveyFailure = (model) => ({
    type:actionTypes.GET_SURVEY_FAILURE,
    payload:model
})

export const saveSurvey = (model) => ({
    type:actionTypes.SAVE_SURVEY_RESPONSE,
    payload:model
})
export const saveSurveySuccess = () => ({
    type:actionTypes.SAVE_SURVEY_RESPONSE_SUCCESS,
    
})
export const saveSurveyFailure = (error) => ({
    type:actionTypes.SAVE_SURVEY_RESPONSE_FAILURE,
    payload:error
})