import React, { Component } from "react";
import SurveyComponent from "../components/survey"
import { HashRouter as Router, Switch, Route } from "react-router-dom"
import SurveyPage from "../pages/survey"
import ThankyouPage from "../pages/thankyou"

class MainApp extends Component {

    render() {
        
        return (<>
            <Router>
                <Switch>
                    <Route exact path="/thankyou" component={ThankyouPage}>
                    </Route>
                    <Route path="/" component={SurveyPage}>
                    </Route>


                </Switch>
            </Router>
        </>)
    }
}

export default MainApp