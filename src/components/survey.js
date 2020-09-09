import React, { Component,PureComponent } from "react";
import * as Survey from "../survey-lib/survey-react/survey.react"
import "../survey-lib/survey-react/survey.min.css"
import { bindActionCreators } from "redux";
import {saveSurvey} from '../actions/index'
import { connect } from "react-redux";



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
    onComplete=(survey, options)=> {
        let responseModel={
            id:this.props.id,
            type:this.props.config.surveyScript.type,
            response:JSON.stringify(survey.data)
        }
        console.log("response model.........",responseModel)
        // this.props.saveSurvey(responseModel);
        
    }
//    componentDidMount(){
//     const script1 = document.createElement("script");
//     script1.src = "https://unpkg.com/emotion-ratings@2.0.1/dist/emotion-ratings.js";
//     script1.async = true;
//     document.body.appendChild(script1);

//     const script2 = document.createElement("script");
//     script2.src = "https://surveyjs.azureedge.net/1.8.0/surveyjs-widgets.js";
//     script2.async = true;
//     document.body.appendChild(script2);
//     console.log("component did mount................")
//    }
    render() {
        var model = new Survey.Model(this.surveyConfig.surveyScript);
  
        return (
            <>
                <Survey.Survey model={model} onComplete={this.onComplete}></Survey.Survey>
               
            </>
            
        )
    }
}

const mapStateToProps = ({surveyReducers}) => ({
    surveyReducers:surveyReducers
})


export default connect(mapStateToProps,{
    saveSurvey
})(SurveyComponent);