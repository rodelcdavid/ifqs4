import React from "react";
import { useParams } from "react-router-dom";

function FormSetupPage() {
  const params = useParams();
  return <div>{params.title}</div>;
}

export default FormSetupPage;
