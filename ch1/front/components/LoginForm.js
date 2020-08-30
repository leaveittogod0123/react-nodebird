import * as React from "react";
import { useCallback } from "react";
import Link from "next/link";
import { Form, Input, Button } from "antd";
import { useInput } from "../pages/signup";

export default function LoginForm() {
  const [id, onChangeId] = useInput("");
  const [password, onChangePassword] = useInput("");
  const onFinish = useCallback((values) => {}, [password]);

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div>
      <Form
        style={{ padding: 10 }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >
        <div>
          <label htmlFor="user-id">아이디</label>
          <br />
          <Input
            name="user-id"
            value={id}
            required
            onChange={onChangeId}
          ></Input>
        </div>
        <div>
          <label htmlFor="user-password">비밀번호</label>
          <br />
          <Input
            name="user-password"
            required
            type="password"
            value={password}
            onChange={onChangePassword}
          ></Input>
        </div>
        <div style={{ marginTop: "10px" }}>
          <Button type="primary" htmlType="submit">
            로그인
          </Button>
          <Link href="/signup">
            <a>
              <Button>회원가입</Button>
            </a>
          </Link>
        </div>
      </Form>
    </div>
  );
}
