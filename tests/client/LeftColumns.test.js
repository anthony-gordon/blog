import React from "react";
import { shallow, mount } from "enzyme";
//shallow - unit testing this particular file and what it does

import Enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16";

Enzyme.configure({ adapter: new Adapter() });

import LeftColumns from "../../client/components/LeftColumns.jsx";
//need to write {} to get the unconnected (specific) version of App
//import App would be the connected default export of App.jsx
import "./setup-dom";

import { Provider } from "react-redux";

import configureStore from "redux-mock-store";

const mockStore = configureStore([]);

test("Text renders on App", () => {
  const store = mockStore({
    newUrl: {},
    newArtwork: {}
  });
  const wrapper = shallow(
    <Provider store={store}>
      <LeftColumns dispatch={store.dispatch} />
    </Provider>
  );
  // expect(wrapper.find("#uploadbackgroundimage").text()).toBe("View all");
  expect(wrapper.find("h1").text()).toBe("Hello world");
});
