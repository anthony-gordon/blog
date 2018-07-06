import React from "react";

import Background from "./Background";
import Header from "./Header";

const App = props => {
  return (
    <div>
      <div>
        <h1>
          <img src="abc" />
        </h1>
        <Header />
      </div>
      <div className="hidden">
        <Background />
      </div>
    </div>
  );
};

export default App;
