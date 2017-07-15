// @flow
import React from "react";
import QueueAnim from "rc-queue-anim";
import { Link } from "react-router-dom";
import facebook from "../img/facebook-icon.svg";
import github from "../img/github-icon-1.svg";
import react1 from "../img/react-1.svg";

class Home extends React.Component {
  state: {
    show: boolean
  };

  constructor() {
    super();
    this.state = {
      show: false
    };
  }

  componentDidMount() {
    this.setState({
      show: true
    });
  }

  render() {
    return (
      <div className="home">
        <div className="home-header" key="header">
          <h1>This is a redux Demo site</h1>
        </div>

        <QueueAnim
          className="democontent"
          duration={1500}
          delay={100}
          type="bottom"
        >
          {this.state.show
            ? [
                <ul key="box" className="box">
                  <li key="0">
                    <img src={facebook} alt="sdf" />
                  </li>
                  <li key="1">
                    <img src={react1} alt="github-icon.svg" />
                  </li>
                  <li key="2">
                    <img src={github} alt="react-1.svg" />
                  </li>
                </ul>
              ]
            : null}
        </QueueAnim>
        <div key="button">
          <button>
            <Link to="all">browser the popular Projects of github</Link>
          </button>
        </div>
      </div>
    );
  }
}

export default Home;
