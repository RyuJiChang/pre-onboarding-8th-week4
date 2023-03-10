import React, { useEffect, useState } from "react";
import CommentListContainer from "./containers/CommentListContainer";
import PageListContainer from "./containers/PageListContainer";
import FormContainer from "./containers/FormContainer";
import axios from "axios";

function App() {
  const [aboutLists, setAboutLists] = useState({
    page: 1,
    amount: 0,
    limit: 4,
    lists: [],
  });
  const [isChanged, setIsChanged] = useState(false);
  const [modifyNow, setModifyNow] = useState({
    profile_url: "",
    author: "",
    content: "",
    createdAt: "",
    id: 0,
    isModify: false,
  });

  useEffect(() => {
    axios
      .get(
        `http://localhost:4000/comments?_page=${1}&_limit=${4}&_order=desc&_sort=id`
      )
      .then((response) => {
        console.log(response);
        setAboutLists({
          ...aboutLists,
          page: 1,
          amount: response.headers["x-total-count"],
          lists: response.data,
        });
      });
  }, [isChanged]);

  return (
    <div>
      <CommentListContainer
        lists={aboutLists.lists}
        setModifyNow={setModifyNow}
        isChanged={isChanged}
        setIsChanged={setIsChanged}
      />
      <PageListContainer
        aboutLists={aboutLists}
        setAboutLists={setAboutLists}
      />
      <FormContainer
        aboutLists={aboutLists}
        setAboutLists={setAboutLists}
        modifyNow={modifyNow}
        setModifyNow={setModifyNow}
        isChanged={isChanged}
        setIsChanged={setIsChanged}
      />
    </div>
  );
}

export default App;
