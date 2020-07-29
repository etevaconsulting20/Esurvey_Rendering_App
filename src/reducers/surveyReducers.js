import { actionTypes } from "../actions/types";

export const surveyReducers = (state, action) => {
    switch (action.type) {
        case actionTypes.GET_SURVEY:
            return { ...state }

        case actionTypes.GET_SURVEY_SUCCESS:
            return { ...state }

        case actionTypes.GET_SURVEY_FAILURE:
            return { ...state }

        default: return { ...state }
    }
}