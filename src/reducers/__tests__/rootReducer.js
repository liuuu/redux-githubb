import reducers from "../rootReducer";

// fake the acitons to meet the result state
test("reducers", () => {
  let state;
  state = reducers(undefined, {});
  expect(state).toEqual({
    allUserData: { isLoading: true, reposData: [] },
    singleUserData: {}
  });
});

test("reducers receive fetchPopularReposAction", () => {
  const fetchPopularReposAction = {
    type: "FETCH_POPULAR_REPOS",
    payload: "whatever"
  };
  let state = reducers(undefined, fetchPopularReposAction);
  expect(state).toEqual({
    allUserData: {
      isLoading: false,
      reposData: fetchPopularReposAction.payload
    },
    singleUserData: {}
  });
});

test("reducers receive fetchSingleUserAction", () => {
  const fetchSingleUserAction = {
    type: "FETCH_PROJECT_INFO",
    payload: "whatever"
  };
  let state = reducers(undefined, fetchSingleUserAction);
  expect(state).toEqual({
    allUserData: { isLoading: true, reposData: [] },
    singleUserData: { data: fetchSingleUserAction.payload }
  });
});
