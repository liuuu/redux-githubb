// @flow
import axios from "axios";

type state = {
  +users: Array<{
    +id: string,
    +name: string,
    +age: number,
    +phoneNumber: string
  }>
};

type Action = { type: "FETCH_PROJECT_INFO" } | { type: "FETCH_POPULAR_REPOS" };

type GetState = () => any;
type PromiseAction = Promise<Action>;
type Dispatch = (
  action: Action | ThunkAction | PromiseAction | Array<Action>
) => any;
type ThunkAction = (dispatch: Dispatch, getState: GetState) => any;

export const fetchPopularRepos: ThunkAction = lang => {
  var encodedURI: string = window.encodeURI(
    "https://api.github.com/search/repositories?q=stars:>1 + language:" +
      lang +
      "&sort=stars&order=desc&type=Repositories"
  );
  const request = axios.get(encodedURI);

  return dispatch => {
    request.then(({ data }) =>
      dispatch({
        type: "FETCH_POPULAR_REPOS",
        payload: data.items
      })
    );
  };
};

const id = "YOUR_CLIENT_ID";
const sec = "YOUR_SECRECT_ID";
const params = "?client_id=" + id + "&client_secrect=" + sec;
export function getProfile(username: string): ThunkAction {
  const request = axios.get(
    `https://api.github.com/users/${username}${params}`
  );
  return dispatch => {
    request.then(({ data }) => {
      dispatch({
        type: "FETCH_PROJECT_INFO",
        payload: data
      });
    });
  };
}
