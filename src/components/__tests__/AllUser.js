import React from "react";
import { AllUser } from "../AllUser";
import { Input, Spin } from "antd";
import { shallow } from "enzyme";
import UserGrid from "../UserGrid";

it("should be one Spin and one Input after the initial rendering", () => {
  const wrapper = shallow(<AllUser isLoading={true} />);
  expect(wrapper.find(Input)).toHaveLength(1);
  expect(wrapper.find(Spin)).toHaveLength(1);
});

const reposData = [
  { id: "jaj", name: "leo" },
  { id: "sd", name: "nick" },
  { id: "ssd", name: "andy" }
];

it("should invoked the props.fetchPopularRepos when componentDidMount", () => {
  const fetchPopularRepos = jest.fn();
  const wrapper = shallow(
    <AllUser fetchPopularRepos={fetchPopularRepos} reposData={reposData} />,
    {
      lifecycleExperimental: true
    }
  );
  expect(fetchPopularRepos).toHaveBeenCalledTimes(1);
  expect(wrapper.find(Spin)).toHaveLength(0);
  expect(wrapper.find(UserGrid)).toHaveLength(3);
});

it("should updata state then new props set", () => {
  const wrapper = shallow(<AllUser isLoading={true} />);
  wrapper.setProps({
    isLoading: false,
    reposData: reposData
  });
  expect(wrapper.state("isLoading")).toEqual(false);
  expect(wrapper.state("reposData")).toEqual(reposData);
});

it("should update the state when handleChange invoked", () => {
  const wrapper = shallow(<AllUser isLoading={true} />);
  wrapper.instance().handleChange({ target: { value: "testing" } });
  expect(wrapper.state("term")).toEqual("testing");
});
