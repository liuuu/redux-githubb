// @flow
import React, { Component } from "react";

import "./App.css";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import { createStore, applyMiddleware, compose } from "redux";
import Nav from "./components/Nav";
import Home from "./components/Home";
import AllUser from "./components/AllUser";

import UserDetail from "./components/UserDetail";

import rootReducer from "./reducers/rootReducer";
import ReduxThunk from "redux-thunk";

const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(ReduxThunk), // middleware
    typeof window === "object" &&
      typeof window.devToolsExtension !== "undefined"
      ? window.devToolsExtension()
      : f => f
  )
);

// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// const store = createStore(
//   rootReducer,
//   composeEnhancers(applyMiddleware(ReduxThunk))
// );
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div className="App">
            <Nav />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/all" component={AllUser} />
              <Route exact path="/user/:projectId" component={UserDetail} />
              <Route render={() => <Redirect to="/" />} />
            </Switch>
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
