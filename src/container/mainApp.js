import React, { Component } from "react";
import SurveyComponent from "../components/survey"
import { HashRouter as Router, Switch, Route } from "react-router-dom"
import SurveyPage from "../pages/survey"
import ThankyouPage from "../pages/thankyou"
import Preview from "../pages/preview"

class MainApp extends Component {

    render() {
        
        return (<>
            <Router>
                <Switch>
                    <Route exact path="/thankyou" component={ThankyouPage}>
                    </Route>
                    <Route exact path="/preview" component={Preview}>
                    </Route>
                    <Route path="/" component={SurveyPage}>
                    </Route>


                </Switch>
            </Router>
        </>)
    }
}

export default MainApp