import React from "react";
import ReactDOM from "react-dom/client";
import Parent from "./props/Parent";
import GuestList from "./state/GuestList";
import UserSearch from "./state/UserSearch";
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(<UserSearch />);
