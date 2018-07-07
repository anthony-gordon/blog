import React from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import IndividualPost from "./IndividualPost";
import Background from "./Background";
import Header from "./Header";
import Menu from "./Menu";
import AllPosts from "./AllPosts";

const App = props => {
  return (
    <Router>
      <div>
        <div>
          <Header />
          <Menu />
        </div>
        <Switch>
          <Route exact path="/" component={Background} />
          <Route path="/post" component={IndividualPost} />
          <Route path="/posts" component={AllPosts} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
