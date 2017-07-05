import React from "react";
import renderer from "react-test-renderer";
import Home from "../Home";
import toJson from "enzyme-to-json";
import { render, shallow, mount } from "enzyme";
import { MemoryRouter } from "react-router-dom";

it("Home renders correctly", () => {
  const wrapper = render(<MemoryRouter><Home /></MemoryRouter>);
  expect(toJson(wrapper)).toMatchSnapshot();
});
