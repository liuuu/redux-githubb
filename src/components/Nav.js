// @flow
import React from "react";
import { Link } from "react-router-dom";

import { Menu, Layout } from "antd";
import { Icon } from "antd";
import { Input } from "antd";

const { Header } = Layout;
class Nav extends React.Component {
  render() {
    return (
      <Layout>
        <Header>
          <Menu
            mode="horizontal"
            style={{ lineHeight: "64px", fontSize: "20px" }}
            theme="dark"
          >
            <Menu.Item><Link to="/"><Icon type="windows-o" /></Link></Menu.Item>
            <Menu.Item><Link to="/all">browse all</Link></Menu.Item>
            <Menu.Item style={{ float: "right" }}>About</Menu.Item>
          </Menu>
        </Header>
      </Layout>
    );
  }
}

export default Nav;
