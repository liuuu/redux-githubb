// @flow
import React from "react";
import { Row, Span, Card, Col, Avatar, Input, Icon, Spin } from "antd";

import { Link } from "react-router-dom";
import { connect } from "react-redux";

import * as actions from "../actions";

type AllUserProp = {
  isLoading: boolean,
  reposData: [],
  fetchPopularRepos: (value: string) => void
};

type User = {
  id: number,
  name: string,
  owner: {
    login: string,
    avatar_url: string
  },
  stargazers_count: number
};

type UserPlus = {
  name: string,
  id: number,
  style?: Object,
  index: number,
  owner: {
    login: string,
    avatar_url: string
  },
  stargazers_count: number
};

class AllUser extends React.Component {
  props: UserPlus;

  state: {
    isLoading: boolean,
    reposData: [],
    term: string
  };

  handleChange: () => void;

  constructor(props: AllUserProp) {
    super(props);
    this.state = {
      isLoading: props.isLoading,
      reposData: props.reposData,
      term: ""
    };
    this.handleChange = this.handleChange.bind(this);
  }

  componentWillReceiveProps(props) {
    this.setState({
      isLoading: props.isLoading,
      reposData: props.reposData
    });
  }

  componentDidMount() {
    this.props.fetchPopularRepos("all");
  }

  handleChange(e: SyntheticKeyboardEvent & { target: HTMLInputElement }) {
    this.setState({
      term: e.target.value
    });
  }

  render() {
    if (this.state.isLoading) {
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
          <div style={{ marginTop: 150 }}>

            <Spin />
            <Spin />
            <Spin />
            <Spin />
            <Spin />
          </div>

        </div>
      );
    }
    const filterItem = this.state.reposData.filter(
      (repo: User) =>
        repo.name.toUpperCase().indexOf(this.state.term.toUpperCase()) >= 0
    );
    return (
      <div>
        <div>
          <Input
            onChange={this.handleChange}
            style={{ display: "inline-block", width: "40%", marginTop: 30 }}
            addonBefore={<Icon type="search" />}
            size="large"
            placeholder="filter the projects"
            value={this.state.term}
          />
        </div>
        <Row style={{ padding: "40px" }}>
          {filterItem.map((repo: User, index) =>
            <UserGrid index={index} key={repo.id} {...repo} />
          )}
        </Row>
      </div>
    );
  }
}

const UserGrid = (props: UserPlus) => {
  return (
    <Col span={8} style={props.style} style={{ padding: "20px" }}>
      <Link to={`/user/${props.owner.login}`} style={{ color: "black" }}>
        <Card>
          <div className="popular-rank">#{parseInt(`${props.index}`) + 1}</div>
          <ul className="space-list-item">
            <li>
              <Avatar
                className="avatar"
                src={props.owner.avatar_url}
                alt={props.owner.login}
              />
            </li>
            <li><p>{props.name}{props.id}</p></li>
            <li>@{props.owner.login}</li>
            <li>Stars: {props.stargazers_count}</li>
          </ul>

        </Card>
      </Link>
    </Col>
  );
};

type State = {
  isLoading: boolean,
  reposData: Array<any>
};

const mapStateToProps = (state: State, ownProps: UserPlus) => {
  const { reposData, isLoading } = state.allUserData;
  return {
    reposData,
    isLoading
  };
};

export default connect(mapStateToProps, actions)(AllUser);
