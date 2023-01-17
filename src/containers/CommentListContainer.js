import React from "react";
import CommentList from "../components/CommentList";

function CommentListContainer({ lists }) {
  return <CommentList lists={lists} />;
}

export default CommentListContainer;
