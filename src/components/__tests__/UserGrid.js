import React from "react";
import UserGrid from "../UserGrid";
import { shallow, render, mount } from "enzyme";
import toJson from "enzyme-to-json";

const props = {
  style: "any",
  owner: {
    login: "any"
  }
};
it("should be good", () => {
  const wrapper = shallow(<UserGrid {...props} />);
  expect(toJson(wrapper)).toMatchSnapshot();
});
