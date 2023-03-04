import React from "react";
import { ChildAsFC } from "./Child";

export default function Parent() {
  return (
    <div>
      <ChildAsFC color="red" onClick={() => console.log("click")}>
        <h1>hi there </h1>
      </ChildAsFC>
    </div>
  );
}
