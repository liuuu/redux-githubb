// @flow
import React from "react";
import { Row, Span, Card, Col, Avatar, Input, Icon, Spin } from "antd";

import { Link } from "react-router-dom";
import { connect } from "react-redux";

import * as actions from "../actions/actionCreators";
import UserGrid from "./UserGrid";

// flow
// type AllUserProp = {
//   isLoading: boolean,
//   reposData: [],
//   fetchPopularRepos: (value: string) => void
// };
//
// type User = {
//   id: number,
//   name: string,
//   owner: {
//     login: string,
//     avatar_url: string
//   },
//   stargazers_count: number
// };
//
// type UserPlus = {
//   name: string,
//   id: number,
//   style?: Object,
//   index: number,
//   owner: {
//     login: string,
//     avatar_url: string
//   },
//   stargazers_count: number
// };

export class AllUser extends React.Component {
  // handleChange: () => void;

  constructor(props) {
    super(props);
    this.state = {
      isLoading: props.isLoading,
      reposData: props.reposData,
      term: ""
    };
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    this.props.fetchPopularRepos();
  }

  componentWillReceiveProps(props) {
    this.setState({
      isLoading: props.isLoading,
      reposData: props.reposData
    });
  }

  handleChange(e: SyntheticKeyboardEvent & { target: HTMLInputElement }) {
    this.setState({
      term: e.target.value
    });
  }
  render() {
    const filterItem =
      this.state.reposData &&
      this.state.reposData.filter(
        (repo: User) =>
          repo.name.toUpperCase().indexOf(this.state.term.toUpperCase()) >= 0
      );

    return (
      <div>
        <Input
          onChange={this.handleChange}
          style={{ display: "inline-block", width: "40%", marginTop: 30 }}
          addonBefore={<Icon type="search" />}
          size="large"
          placeholder="filter the projects"
          value={this.state.term}
        />
        {this.state.isLoading
          ? <div style={{ marginTop: 150 }}>
              <Spin />
            </div>
          : <Row style={{ padding: "40px" }}>
              {filterItem.map((repo: User, index) =>
                <UserGrid index={index} key={repo.id} {...repo} />
              )}
            </Row>}
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  const { reposData, isLoading } = state.allUserData;
  return {
    reposData,
    isLoading
  };
};

export default connect(mapStateToProps, actions)(AllUser);
