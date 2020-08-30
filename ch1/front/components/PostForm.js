import React from "react";
import { Form, Input, Button } from "antd";

const dummy = {
  isLoggedIn: true,
  imagePaths: [],
  mainPosts: [
    {
      User: {
        id: 1,
        nickname: "요셉노",
      },
      content: "첫 번째 게시글",
      img:
        "https://bookthumb-phinf.pstatic.net/cover/137/995/13799585.jpg?udate=20180726",
    },
  ],
};

export default function PostForm() {
  return (
    <div>
      <Form style={{ margin: "10px 0 20px" }} encType="multipart/form-data">
        <Input.TextArea
          maxLength={140}
          placeholder="어떤 신기한 일이 있었나요?"
        />
        <div>
          <input type="file" multiple hidden />
          <Button>이미지 업로드</Button>
          <Button type="primary" style={{ float: "right" }} htmlType="sumbit">
            짹짹
          </Button>
        </div>
        <div>
          {dummy.imagePaths.map((v, i) => {
            return (
              <div key={v} style={{ display: "inline-blokc" }}>
                <img
                  src={"http://localhost:3065/" + v}
                  style={{ width: "200px" }}
                  alt={v}
                />
                <div>
                  <Button>제거</Button>
                </div>
              </div>
            );
          })}
        </div>
      </Form>
    </div>
  );
}
