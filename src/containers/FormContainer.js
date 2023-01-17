import React from "react";
import Form from "../components/Form";

function FormContainer({ modifyNow, setModifyNow, isChanged, setIsChanged }) {
  return (
    <Form
      modifyNow={modifyNow}
      setModifyNow={setModifyNow}
      isChanged={isChanged}
      setIsChanged={setIsChanged}
    />
  );
}

export default FormContainer;
