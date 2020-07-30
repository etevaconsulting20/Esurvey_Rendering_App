

import React, { Component } from "react";
import { connect } from "react-redux"
import { withRouter } from "react-router-dom";
import defaultScript from "../util/defaultScript";
import SurveyComponent from "../components/survey";
import { Dimmer, Loader } from "semantic-ui-react"
import { getSurvey } from "../actions/index";


const querryString = require("query-string");


class Survey extends Component {
    componentDidMount = () => {
     
        const { id } = querryString.parse(this.props.location.search)
    
        
    }

    render() {
        const { surveyScript,loading,surveyId } = this.props
        
        return (
            
            <>
            {
                loading?<Dimmer active>
                <Loader>Loading</Loader>
            </Dimmer>:null
            }
                {surveyScript ? <SurveyComponent id={surveyId} config={{ ...defaultScript, surveyScript: surveyScript }} ></SurveyComponent> : <p>no script </p>}
            </>
        )
    }
}
const mapStateToProps = ({ surveyReducers }) => {
    return { ...surveyReducers }
}
export default connect(mapStateToProps, {
    getSurvey,
    
})(withRouter(Survey))