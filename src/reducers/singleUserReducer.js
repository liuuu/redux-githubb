// @flow

type state = {};
const singleUserReducer = (state = {}, action) => {
  switch (action.type) {
    case "FETCH_PROJECT_INFO":
      return { data: action.payload };
    default:
      return state;
  }
};

export default singleUserReducer;
