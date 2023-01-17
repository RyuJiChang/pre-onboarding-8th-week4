import React from "react";
import Form from "../components/Form";

function FormContainer({ modifyNow, setModifyNow }) {
  return <Form modifyNow={modifyNow} setModifyNow={setModifyNow} />;
}

export default FormContainer;
