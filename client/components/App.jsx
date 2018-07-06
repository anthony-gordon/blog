import React from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import IndividualPost from "./IndividualPost";
import Background from "./Background";
import Header from "./Header";

const App = props => {
  return (
    <Router>
      <div>
        <div>
          <Header />
        </div>
        <Switch>
          <Route exact path="/" component={Background} />
          <Route path="/post" component={IndividualPost} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
