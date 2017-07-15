import React from "react";
import { Col, Card, Avatar } from "antd";
import { Link } from "react-router-dom";

const UserGrid = props => {
  return (
    <Col span={8} style={(props.style, { padding: "20px" })}>
      <Link to={`/user/${props.owner.login}`} style={{ color: "black" }}>
        <Card>
          <div className="popular-rank">
            #{parseInt(`${props.index}`, 10) + 1}
          </div>
          <ul className="space-list-item">
            <li>
              <Avatar
                className="avatar"
                src={props.owner.avatar_url}
                alt={props.owner.login}
              />
            </li>
            <li>
              <p>
                {props.name}
                {props.id}
              </p>
            </li>
            <li>
              @{props.owner.login}
            </li>
            <li>
              Stars: {props.stargazers_count}
            </li>
          </ul>
        </Card>
      </Link>
    </Col>
  );
};

export default UserGrid;
