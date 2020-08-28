import * as React from "react";
import { useState } from "react";
import AppLayout from "../components/AppLayout";
import Head from "next/head";
import { Form, Input, Button, Checkbox } from "antd";

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};
const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};

function signup() {
  const [id, onChangeId] = useInput("");
  const [nickName, onChangeNickname] = useInput("");
  const [password, onChangePassword] = useInput("");
  const [passwordCheck, onChangePasswordCheck] = useInput("");
  const [term, setTerm] = useState("");
  const [passwordError, setPasswordError] = useState(false);
  const [termError, setTermError] = useState(false);

  const onFinish = (values) => {
    if (password !== passwordCheck) {
      setPasswordError(passwordCheck !== password);
      return;
    }

    if (!term) {
      setTermError(!term);
      return;
    }
    console.log("Success:", id, password, nickName);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  const onChangePasswordCheck = (e) => {
    setPasswordError(e.target.value !== password);
    setPasswordCheck(e.target.value);
  };

  const onChangeTerm = (e) => {
    setTermError(!e.target.checked);
    setTerm(e.target.checked);
  };

  const useInput = (initvalue = null) => {
    const [value, setter] = useState(initvalue);
    const handler = (e) => {
      setter(e.target.value);
    };
    return [value, handler];
  };

  return (
    <>
      <Head>
        <title>NodeBird</title>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/antd/4.4.3/antd.min.css"
        />
      </Head>
      <div>
        <AppLayout>
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
              <label htmlFor="user-nickname">닉네임</label>
              <br />
              <Input
                name="user-nickname"
                required
                value={nickName}
                onChange={onChangeNickname}
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
            <div>
              <label htmlFor="user-password-check">비밀번호체크</label>
              <br />
              <Input
                type="password"
                name="user-password-check"
                required
                value={passwordCheck}
                onChange={onChangePasswordCheck}
              ></Input>
              {passwordError && (
                <div style={{ color: "red" }}>
                  비밀번호가 일치하지 않습니다.
                </div>
              )}
            </div>
            <div>
              <Checkbox name="user-term" checked={term} onChange={onChangeTerm}>
                동의하시겠습니까?
              </Checkbox>
              {termError && (
                <div style={{ color: "red" }}>약관에 동의하셔야 합니다.</div>
              )}
            </div>
            <div style={{ marginTop: "10px" }}>
              <Button type="primary" htmlType="submit">
                가입하기
              </Button>
            </div>
          </Form>
        </AppLayout>
      </div>
    </>
  );
}

export default signup;
