import React from "react";
import { useParams } from "react-router-dom";

function QuizSetup() {
  const params = useParams();
  return <div>{params.title}</div>;
}

export default QuizSetup;
