import React, { Component } from "react";
import * as Survey from "../survey-lib/survey-react/survey.react"
import "../survey-lib/survey-react/survey.min.css"



class SurveyComponent extends Component {
    constructor(props) {
        super(props)
        this.surveyConfig = this.props.config
        this.defaultThemeColors = Survey
            .StylesManager
            .ThemeColors["default"];

        this.defaultThemeColors["$main-color"] = this.surveyConfig.custommCSS.mainColor;
        this.defaultThemeColors["$text-color"] = this.surveyConfig.custommCSS.textColor;
        this.defaultThemeColors["$main-hover-color"] = this.surveyConfig.custommCSS.mainHoverColor
        this.defaultThemeColors["$header-background-color"] = this.surveyConfig.custommCSS.headerBackgroundColor
        this.defaultThemeColors["$body-container-background-color"] = this.surveyConfig.custommCSS.bodyContainerBackgroundColor
        this.defaultThemeColors["$header-color"] = this.surveyConfig.custommCSS.headerColor;
        Survey
            .StylesManager
            .applyTheme();


    }
    onComplete(survey, options) {
        console.log("Survey results: " + JSON.stringify(survey.data));
        window.parent.postMessage("complete", "*")
    }
    render() {
        var model = new Survey.Model(this.surveyConfig.surveyScript);
  
        return (
            <>
                <Survey.Survey model={model} onComplete={this.onComplete}></Survey.Survey>
            </>
        )
    }
}

export default SurveyComponent