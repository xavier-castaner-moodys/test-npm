import React from "react";
import Hello from "../hello";
import World from "../world";

const HelloWorld = ({ name }) => {
  return (
    <>
      <Hello />
      <World name="World" />
    </>
  );
};

export default HelloWorld;
