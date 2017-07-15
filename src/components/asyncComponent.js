import React from "react";

export default function(importComponent) {
  class AsyncComponent extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        component: null
      };
    }
    async componentDidMount() {
      const { default: component } = await importComponent();
      this.setState({
        component
      });
    }
    render() {
      console.log(this.state.component);
      console.log(this.props);
      const C = this.state.component;
      return C ? <C {...this.props} /> : null;
    }
  }

  return AsyncComponent;
}

// AsyncComponent(Home)

// component={AsyncComponent(Home)}
