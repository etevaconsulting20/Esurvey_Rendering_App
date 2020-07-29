import { actionTypes } from "./types";

export const getSurvey = (model) => ({
    type:actionTypes.GET_SURVEY,
    payload:model
})
export const getSurveySuccess = (model) => ({
    type:actionTypes.GET_SURVEY_SUCCESS,
    payload:model
})
export const getSurveyFailure = (model) => ({
    type:actionTypes.GET_SURVEY_FAILURE,
    payload:model
})