// @flow
import React, { Component } from "react";

import "./App.css";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { createStore, applyMiddleware, compose } from "redux";
import Nav from "./components/Nav";

import rootReducer from "./reducers/rootReducer";
import ReduxThunk from "redux-thunk";

import Routes from "./components/Routes";

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
            <Routes />
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
