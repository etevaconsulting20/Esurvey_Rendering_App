import React, { Component,PureComponent } from "react";
import * as Survey from "../survey-lib/survey-react/survey.react"
import "../survey-lib/survey-react/survey.min.css"
import { bindActionCreators } from "redux";
import {saveSurvey} from '../actions/index'
import { connect } from "react-redux";
import * as Widgets from 'surveyjs-widgets';
  
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

        Widgets.emotionsratings(Survey)
    }
    // componentDidMount(){
    //     let data = 
    // }
    onComplete=(survey, options)=> {
        localStorage.setItem("response",JSON.stringify(survey.data))
        // let responseModel={
        //     id:this.props.id,
        //     type:this.props.config.surveyScript.type,
        //     response:JSON.stringify(survey.data)
        // }
        // this.props.saveSurvey(responseModel);w2 b
        
    }
   
    render() {
        debugger
        var model = new Survey.Model(this.surveyConfig.surveyScript);
        let data = this.props.data?this.props.data:null;
        if(data){
            model.data=data
        }
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