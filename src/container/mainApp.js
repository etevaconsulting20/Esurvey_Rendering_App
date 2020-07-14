import React, { Component } from "react";
import SurveyComponent from "../components/survey"
import defaultScript from "../util/defaultScript"

class MainApp extends Component {
    debugger
    render() {
        return (<>
            <SurveyComponent config={defaultScript}></SurveyComponent>
        </>)
    }
}

export default MainApp