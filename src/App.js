import React, { useEffect, useState } from "react";
import CommentListContainer from "./containers/CommentListContainer";
import PageListContainer from "./containers/PageListContainer";
import FormContainer from "./containers/FormContainer";
import axios from "axios";

function App() {
  const [lists, setLists] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:4000/comments").then((data) => {
      setLists(data.data);
    });
  }, []);
  return (
    <div>
      <CommentListContainer lists={lists} />
      <PageListContainer />
      <FormContainer />
    </div>
  );
}

export default App;
