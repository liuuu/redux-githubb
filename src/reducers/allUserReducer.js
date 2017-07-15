// @flow

// type State = {
//   isLoading: boolean,
//   reposData: Array<any>
// };
//
// type ActionType = "FETCH_PROJECT_INFO" | "FETCH_POPULAR_REPOS";
//
// type ActionT<A: ActionType, P> = {|
//   type: A,
//   payload: P
// |};
//
// type Action =
//   | ActionT<"FETCH_PROJECT_INFO", Object>
//   | ActionT<"FETCH_POPULAR_REPOS", Object[]>;

const DEFALUT_STATE = { isLoading: true, reposData: [] };

const allUserReducer = (state: State = DEFALUT_STATE, action: Action) => {
  switch (action.type) {
    case "FETCH_POPULAR_REPOS":
      return { isLoading: false, reposData: action.payload };

    default:
      return state;
  }
};

export default allUserReducer;
