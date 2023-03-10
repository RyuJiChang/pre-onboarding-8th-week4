import axios from "axios";
import React from "react";
import styled from "styled-components";

function CommentList({ lists, setModifyNow, isChanged, setIsChanged }) {
  const addModifyData = (e, comment) => {
    setModifyNow({ ...comment, isModify: true });
  };

  const deleteList = (e, comment) => {
    axios
      .delete(`http://localhost:4000/comments/${comment.id}`)
      .then(setIsChanged(!isChanged));
  };

  return lists.map((comment, key) => (
    <Comment key={key}>
      <img src={comment.profile_url} alt="" />

      {comment.author}

      <CreatedAt>{comment.createdAt}</CreatedAt>

      <Content>{comment.content}</Content>

      <ButtonContainer>
        <button onClick={(e) => addModifyData(e, comment)}>수정</button>
        <button onClick={(e) => deleteList(e, comment)}>삭제</button>
      </ButtonContainer>

      <hr />
    </Comment>
  ));
}

export default CommentList;

const Comment = styled.div`
  padding: 7px 10px;
  text-align: left;

  & > img {
    vertical-align: middle;
    margin-right: 10px;
    border-radius: 50%;
    width: 50px;
    height: 50px;
  }
`;

const CreatedAt = styled.div`
  float: right;
  vertical-align: middle;
`;

const Content = styled.div`
  margin: 10px 0;
`;

const ButtonContainer = styled.div`
  text-align: right;
  margin: 10px 0;
  & > button {
    margin-right: 10px;
    padding: 0.375rem 0.75rem;
    border-radius: 0.25rem;
    border: 1px solid lightgray;
    cursor: pointer;
  }
`;
