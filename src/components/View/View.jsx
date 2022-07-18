import React from "react";
import { BackGround } from "./View.style";

const View = ({ children }) => {
  return <BackGround>{children}</BackGround>;
};

export default View;
