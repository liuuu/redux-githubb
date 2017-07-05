import React from "react";
import Nav from "../Nav";
import { shallow, mount, render } from "enzyme";
import toJson from "enzyme-to-json";
import { MemoryRouter } from "react-router-dom";
import renderer from "react-test-renderer";
import { Menu } from "antd";

it("should match snapshot Nav", () => {
  const tree = render(
    <MemoryRouter>
      <Nav />
    </MemoryRouter>
  );
  expect(toJson(tree)).toMatchSnapshot();
});

it("should have 1 Menu component", () => {
  const component = mount(
    <MemoryRouter>
      <Nav />
    </MemoryRouter>
  );

  expect(component.find(Menu)).toHaveLength(1);
});
