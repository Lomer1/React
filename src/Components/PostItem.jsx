import { Component } from "react";

const PostItem = (props) => {
    return (
      <div className = 'post'>
        <div className = 'post__content'>
          <strong>{props.post.id}. {props.post.post}</strong>
          <div>{props.post.body}</div>
        </div>
          <div className = 'post__btn'>
            <button>Удалить</button>
          </div>
      </div>
    )
}

export default PostItem;