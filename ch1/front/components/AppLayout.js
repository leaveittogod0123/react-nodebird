import * as React from "react";

import { Menu, Input, Row, Col } from "antd";
import Link from "next/link";
import LoginForm from "./LoginForm";
import UserProfile from "./UserProfile";

const dummy = {
  nickname: "요셉노",
  Post: [],
  Followings: [],
  Followers: [],
  isLoggedIn: false,
};

export default function AppLayout({ children }) {
  return (
    <div>
      <Menu mode="horizontal">
        <Menu.Item key="home">
          <Link href="/">
            <a>노드버드</a>
          </Link>
        </Menu.Item>
        <Menu.Item key="profile">
          <Link href="/profile">
            <a>프로필</a>
          </Link>
        </Menu.Item>
        <Menu.Item key="mail">
          <Input.Search enterButton style={{ verticalAlign: "middle" }} />
        </Menu.Item>
      </Menu>

      <Row>
        <Col xs={24} md={6}>
          {dummy.isLoggedIn && <UserProfile />}
          {!dummy.isLoggedIn && <LoginForm />}
        </Col>
        <Col xs={24} md={12}>
          {children}
        </Col>
        <Col xs={24} md={6}>
          <a
            href="https://www.zerocho.com"
            target="_blank"
            rel="noreferrer noopener"
          >
            Made by ZeroCho
          </a>
        </Col>
      </Row>
    </div>
  );
}
