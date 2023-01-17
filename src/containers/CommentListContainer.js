import React from "react";
import CommentList from "../components/CommentList";

function CommentListContainer({ lists, setModifyNow }) {
  return <CommentList lists={lists} setModifyNow={setModifyNow} />;
}

export default CommentListContainer;
