

import React, { Component } from "react";
import { connect } from "react-redux"
import { withRouter } from "react-router-dom";
import defaultScript from "../util/defaultScript";
import SurveyComponent from "../components/survey";
import { Dimmer, Loader } from "semantic-ui-react"
import { getSurvey } from "../actions/index";
import { saveSurvey } from "../actions/index";
import ChatBot from '../chatbot-lib/chatbot-react/ChatBot.jsx';


const querryString = require("query-string");


class Survey extends Component {
    componentDidMount = () => {
        const { id } = querryString.parse(this.props.location.search)
        this.props.getSurvey(id);
    }

    setJson=(value)=>{
        // console.log('setJson.........',value)
      }

      postAnswerJSON=(chatResponse)=>{
        console.log('postAnswerJSON..........',chatResponse)
        let responseModel={
            id:this.props.surveyId,
            type:this.props.surveyScript.type,
            response:JSON.stringify(chatResponse)
        }
        console.log("responseModel.............",responseModel)
        this.props.saveSurvey(responseModel);
      }

    render() {
        const { surveyScript, loading, surveyId } = this.props
        console.log('json..........',this.props)
        // const surveyType = surveyScript.type;
        return (

            <>
                {
                    loading ? <Dimmer active>
                        <Loader>Loading</Loader>
                    </Dimmer> : null
                }
                {/* {surveyScript ? <SurveyComponent id={surveyId} config={{ ...defaultScript, surveyScript: surveyScript }} ></SurveyComponent> : <p>no script </p>} */}
           
                {surveyScript ? 
                <>
                {surveyScript.type == "Survey" &&  <SurveyComponent id={surveyId} config={{ ...defaultScript, surveyScript: surveyScript }} ></SurveyComponent>}
                {surveyScript.type == 'ChatBot' &&
                    <>{surveyScript.questions && surveyScript.questions.length > 0 &&
                    <ChatBot
                    steps={surveyScript.questions}
                    setJson={this.setJson}
                    postAnswerJSON={this.postAnswerJSON}
                    botAvatar={surveyScript.logo}
                    headerTitle={surveyScript.title}
                    ></ChatBot>
                    }</>}
                </> : 
                <p>no script </p>}
            </>
        )
    }
}
const mapStateToProps = ({ surveyReducers }) => {
    return { ...surveyReducers }
}
export default connect(mapStateToProps, {
    getSurvey,saveSurvey,

})(withRouter(Survey))