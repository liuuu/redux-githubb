import { getProfile, fetchPopularRepos, params } from "../actionCreators";
import moxios from "moxios";

it("async function fetchPopularRepos will dispatch with actionType and value", done => {
  const mockRespondData = { items: [1, 2, 3] };
  const dispatchMock = jest.fn();
  moxios.withMock(() => {
    fetchPopularRepos()(dispatchMock);
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request
        .respondWith({
          status: 200,
          response: mockRespondData
        })
        .then(() => {
          expect(dispatchMock).toHaveBeenCalledWith({
            type: "FETCH_POPULAR_REPOS",
            payload: mockRespondData.items
          });
          done();
        })
        .catch(err => console.log(err));
    });
  });
});

it("async function getProfile will dispatch with the right actionType and paylaod  ", done => {
  const mockRespondData = {
    name: "liu",
    login: "any",
    bio: "awesome",
    avatar_url: "http://baidu.com"
  };
  const dispatchMock = jest.fn();
  moxios.withMock(() => {
    getProfile("userName")(dispatchMock);
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request
        .respondWith({
          status: 200,
          response: mockRespondData
        })
        .then(() => {
          expect(request.url).toEqual(
            `https://api.github.com/users/userName${params}`
          );

          expect(dispatchMock).toHaveBeenCalledWith({
            type: "FETCH_PROJECT_INFO",
            payload: mockRespondData
          });

          done();
        })
        .catch(err => console.log(err));
    });
  });
});
