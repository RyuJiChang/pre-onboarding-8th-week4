import React from "react";
import CommentList from "../components/CommentList";

function CommentListContainer({
  lists,
  setModifyNow,
  isChanged,
  setIsChanged,
}) {
  return (
    <CommentList
      lists={lists}
      setModifyNow={setModifyNow}
      isChanged={isChanged}
      setIsChanged={setIsChanged}
    />
  );
}

export default CommentListContainer;
