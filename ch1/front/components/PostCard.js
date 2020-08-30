import React from "react";
import { Card, Avatar, Button } from "antd";
import PropTypes from "prop-types";

export default function PostCard({ post }) {
  return (
    <div>
      <Card
        key={post.id}
        cover={post.img && <img alt="example" src={post.img}></img>}
        actions={[
          <div key="twit">
            짹짹
            <br />
            {post.Posts.length}
          </div>,
          <div key="following">
            팔로잉
            <br />
            {post.Followings.length}
          </div>,
          <div key="follower">
            팔로워
            <br />
            {post.Followers.length}
          </div>,
        ]}
        extra={<Button>팔로우</Button>}
      >
        <Card.Meta
          avatar={<Avatar>{post.User.nickname[0]}</Avatar>}
          title={post.User.nickname}
          description={post.content}
        />
      </Card>
    </div>
  );
}

PostCard.propTypes = {
  post: PropTypes.shape({
    User: PropTypes.object,
    content: PropTypes.string,
    img: PropTypes.string,
    createdAt: PropTypes.object,
  }),
};
