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
  const [state, setState] = useState({
    id: "",
    nickName: "",
    password: "",
    passwordCheck: "",
    term: false,
    passwordError: false,
    termError: false,
  });

  const [id, setId] = useState("");
  const [nickName, setNickName] = useState("");
  const [password, setPassword] = useState("");
  const [passwordCheck, setPasswordCheck] = useState("");
  const [term, setTerm] = useState("");

  const onFinish = (values) => {
    const { password, passwordCheck, term } = state;
    if (password !== passwordCheck) {
      setState({ ...state, passwordError: true });
      return;
    }

    if (!term) {
      setState({ ...state, termError: true });
      return;
    }
    console.log("Success:", state);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  const onChnageId = (e) => {
    setState({ ...state, id: e.target.value });
  };

  const onChnageNickName = (e) => {
    setState({ ...state, nickName: e.target.value });
  };

  const onChnagePassword = (e) => {
    setState({ ...state, password: e.target.value });
  };

  const onChnagePasswordCheck = (e) => {
    const { password } = state;
    console.log(password, e.target.value);
    if (password !== e.target.value) {
      console.log("password 달라");
      setState({ ...state, passwordError: true });
    } else {
      setState({ ...state, passwordError: false });
    }
    setState({ ...state, passwordCheck: e.target.value });
  };

  const onChangeTerm = (e) => {
    if (!e.target.checked) {
      console.log("term ㅜnO");
      setState({ ...state, termError: true });
    } else {
      setState({ ...state, termError: false });
    }
    setState({ ...state, term: e.target.checked });
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
                value={state.id}
                required
                onChange={onChnageId}
              ></Input>
            </div>
            <div>
              <label htmlFor="user-nickname">닉네임</label>
              <br />
              <Input
                name="user-nickname"
                required
                value={state.nickName}
                onChange={onChnageNickName}
              ></Input>
            </div>
            <div>
              <label htmlFor="user-password">비밀번호</label>
              <br />
              <Input
                name="user-password"
                required
                type="password"
                value={state.password}
                onChange={onChnagePassword}
              ></Input>
            </div>
            <div>
              <label htmlFor="user-password-check">비밀번호체크</label>
              <br />
              <Input
                type="password"
                name="user-password-check"
                required
                value={state.passwordCheck}
                onChange={onChnagePasswordCheck}
              ></Input>
              {state.passwordError && (
                <div style={{ color: "red" }}>
                  비밀번호가 일치하지 않습니다.
                </div>
              )}
            </div>
            <div>
              <Checkbox
                name="user-term"
                checked={state.term}
                onChange={onChangeTerm}
              >
                동의하시겠습니까?
              </Checkbox>
              {state.termError && (
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
