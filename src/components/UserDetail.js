//  @flow
import React from "react";
import { Card, Avatar, Col, Row, Spin } from "antd";
import axios from "axios";

import { connect } from "react-redux";
import { Link, Prompt } from "react-router-dom";
import { getProfile } from "../actions/actionCreators";

export class UserDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      detail: props.data,
      name: ""
    };
  }

  componentWillMount() {
    let name = this.props.match && this.props.match.params.projectId;
    this.props.getProfile(name);
  }

  // componentDidMount() {
  //   console.log("didmount");
  //   const name: string = this.props.match.params.projectId;
  //   this.props.getProfile(name);
  // }

  componentWillReceiveProps(nextProps) {
    this.setState({
      loading: false,
      detail: nextProps.data
    });
  }

  render() {
    const detail = this.state.detail;
    const spin = this.state.loading || !this.state.detail;
    if (spin) {
      return (
        <div style={{ marginTop: 150 }}>
          <Spin />
        </div>
      );
    }

    return (
      <div className="user-detail">
        <Row type="flex" justify="center" style={{ marginTop: 50 }}>
          <Col span={10}>
            <Card bodyStyle={{ padding: 0 }} bordered={false}>

              <ul className="space-list-item">
                <li>
                  <img
                    style={{ width: "70%" }}
                    className="avatar"
                    src={detail.avatar_url}
                    alt={detail.login}
                  />
                </li>
                <li><p>{detail.name}</p></li>

                <li>{detail.bio}</li>
                <li><Link to="/all">back to all</Link></li>

              </ul>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    data: state.singleUserData.data
  };
};

export default connect(mapStateToProps, { getProfile })(UserDetail);
