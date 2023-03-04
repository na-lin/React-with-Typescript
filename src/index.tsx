import React from "react";
import ReactDOM from "react-dom/client";
import Parent from "./props/Parent";
import GuestList from "./state/GuestList";
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(<GuestList />);
