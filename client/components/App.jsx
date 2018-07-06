import React from "react";

import Background from "./Background";
import Header from "./Header";

const App = props => {
  return (
    <div>
      <div>
        <Header />
      </div>
      <div className="hidden">
        <Background />
      </div>
    </div>
  );
};

export default App;
