import React, { useState } from "react";
import "./SearchBar.css";

const SearchBar = (props) => {
  const [term, setTerm] = useState("");
  const onChangeInput = (event) => {
    setTerm(event.target.value);
  };

  const onFormSubmit = (event) => {
    event.preventDefault();
    props.onSubmitForm(term);
  };
  return (
    <>
      <form onSubmit={onFormSubmit} className="search__form">
        <input
          className="search__input"
          onChange={onChangeInput}
          placeholder="search"
          type="text"
          value={term}
        />
      </form>
    </>
  );
};

export default SearchBar;
