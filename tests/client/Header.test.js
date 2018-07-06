import React from "react";
import { shallow, mount } from "enzyme";
//shallow - unit testing this particular file and what it does

import Enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16";

Enzyme.configure({ adapter: new Adapter() });

import Header from "../../client/components/Header.jsx";
//need to write {} to get the unconnected (specific) version of App
//import App would be the connected default export of App.jsx
import "./setup-dom";

const wrapper = shallow(<Header />);

test("renders the React component", () => {
  expect(wrapper.length).toEqual(1);
});

test("Text renders on Header", () => {
  expect(wrapper.find("#homegallery").text()).toBe("home gallery");
  expect(wrapper.find("#byanthonygordon").text()).toBe("by anthony gordon");
});

test("Github link renders on Header", () => {
  expect(wrapper.find("a").html()).toBe(
    '<a href="https://github.com/anthony-gordon"><img class="github" src="https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg"/></a>'
  );
});

//INIT
test("Test Suite Working", () => {
  expect(true).toBe(true);
});
