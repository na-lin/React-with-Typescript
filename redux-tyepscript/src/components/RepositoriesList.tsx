import React, { useState } from "react";
import { useActions } from "../hook/useAction";
import { useTypedSelector } from "../hook/useTypedSelector";

const RepositoriesList: React.FC = () => {
  const [term, setTerm] = useState("");
  const { searchRepositories } = useActions();
  const { loading, data, error } = useTypedSelector(
    (state) => state.repositories
  );
  console.log(data);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTerm(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // call action creator
    searchRepositories(term);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input value={term} onChange={handleChange} />
        <button>Search</button>
      </form>
    </div>
  );
};

export default RepositoriesList;
