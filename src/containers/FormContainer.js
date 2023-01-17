import React from "react";
import Form from "../components/Form";

function FormContainer({
  aboutLists,
  setAboutLists,
  modifyNow,
  setModifyNow,
  isChanged,
  setIsChanged,
}) {
  return (
    <Form
      aboutLists={aboutLists}
      setAboutLists={setAboutLists}
      modifyNow={modifyNow}
      setModifyNow={setModifyNow}
      isChanged={isChanged}
      setIsChanged={setIsChanged}
    />
  );
}

export default FormContainer;
