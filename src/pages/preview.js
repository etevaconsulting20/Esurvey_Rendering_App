

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

      render(){
          let responseData= JSON.parse(localStorage.getItem("response"))
          return(
              <div> 
                 <SurveyComponent id={1} config={{ ...defaultScript,custommCSS:{...defaultScript.custommCSS,mainColor:"red",textColor:"red"}}} data={responseData} ></SurveyComponent>
              </div>
          )
      }

}
const mapStateToProps = ({ surveyReducers }) => {
    return { ...surveyReducers }
}
export default connect(mapStateToProps, {
    getSurvey,saveSurvey,

})(withRouter(Survey))