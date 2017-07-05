import React from "react";
import { UserDetail } from "../UserDetail";
import { mount } from "enzyme";
import { MemoryRouter } from "react-router-dom";
import { Spin, Row } from "antd";

const props = {
  data: {
    avatar_url: "any",
    login: "any",
    name: "any",
    bio: "any"
  },
  match: {
    params: {
      id: "any"
    }
  }
};

it("should be good", () => {
  const getProfile = jest.fn();
  const Component = props => {
    return (
      <MemoryRouter>
        <UserDetail {...props} getProfile={getProfile} />
      </MemoryRouter>
    );
  };
  const wrapper = mount(<Component />);
  //mount will trigger the componentWillMount, then fired the mocked props.getProfile
  expect(getProfile).toHaveBeenCalledTimes(1);
  expect(wrapper.find(Spin)).toHaveLength(1);
  expect(wrapper.find(Row)).toHaveLength(0);

  //test the props which have been set manually
  //state.loading should be false
  wrapper.setProps({
    ...props
  });
  expect(wrapper.find(Spin)).toHaveLength(0);
  expect(wrapper.find(Row)).toHaveLength(1);
});
