import React from "react";
import PageList from "../components/PageList";

function PageListContainer({ aboutLists, setAboutLists }) {
  return <PageList aboutLists={aboutLists} setAboutLists={setAboutLists} />;
}

export default PageListContainer;
