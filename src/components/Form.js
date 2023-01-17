import axios from "axios";
import React from "react";
import styled from "styled-components";

function Form({ modifyNow }) {
  const createList = (e) => {
    e.preventDefault();
    axios
      .post(`http://localhost:4000/comments`, {
        profile_url: e.target[0].value,
        author: e.target[1].value,
        content: e.target[2].value,
        createdAt: e.target[3].value,
      })
      .then(
        // console.log(
        //   "update 성공 / isChanged 변경, 1페이지 이동,"
        // )
        e.target.reset()
      );
  };

  const modifyList = (e) => {
    e.preventDefault();
    axios
      .put(`http://localhost:4000/comments/${modifyNow.id}`, {
        profile_url: e.target[0].value,
        author: e.target[1].value,
        content: e.target[2].value,
        createdAt: e.target[3].value,
      })
      .then(
        console.log(
          "update 성공 / isChanged 변경으로 리렌더 및 1페이지 이동 등 과제"
        )
      );
  };

  return (
    <FormStyle>
      <form onSubmit={modifyNow.isModify ? modifyList : createList}>
        <input
          type="text"
          name="profile_url"
          placeholder="https://picsum.photos/id/1/50/50"
          defaultValue={modifyNow.profile_url}
          required
        />
        <input
          type="text"
          name="author"
          placeholder="작성자"
          defaultValue={modifyNow.author}
        />
        <textarea
          name="content"
          placeholder="내용"
          defaultValue={modifyNow.content}
          required
        ></textarea>
        <input
          type="text"
          name="createdAt"
          placeholder="2020-05-30"
          defaultValue={modifyNow.createdAt}
          required
        />
        <button type="submit">등록</button>
      </form>
    </FormStyle>
  );
}

export default Form;

const FormStyle = styled.div`
  & > form {
    padding: 0 10px;
    margin-bottom: 50px;
  }
  & > form > textarea {
    padding: 5px 1%;
    width: 98%;
    height: 50px;
  }
  & > form > input[type="text"] {
    padding: 5px 1%;
    width: 98%;
    margin-bottom: 10px;
  }
  & > form > button {
    padding: 0.375rem 0.75rem;
    border-radius: 0.25rem;
    border: 1px solid lightgray;
    cursor: pointer;
  }
`;
