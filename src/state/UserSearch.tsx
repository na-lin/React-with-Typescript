import React, { useState } from "react";

const users = [
  {
    name: "John",
    age: 20,
  },
  { name: "Alex", age: 12 },
];

const UserSearch: React.FC = () => {
  const [name, setName] = useState("");
  const [searchResult, setSearchResult] = useState<
    { name: string; age: number } | undefined
  >();

  const Search = () => {
    const user = users.find((user) => user.name === name);
    setSearchResult(user);
  };

  return (
    <div>
      <h3>UserSearch</h3>
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <button onClick={Search}>Find</button>
      <p>{searchResult && searchResult.name}</p>
      <p>{searchResult && searchResult.age}</p>
    </div>
  );
};

export default UserSearch;
