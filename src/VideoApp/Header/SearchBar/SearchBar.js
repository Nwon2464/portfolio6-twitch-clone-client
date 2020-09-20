import React, { useState } from "react";

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
      <form onSubmit={onFormSubmit} className="">
        <input
        id="app-input-search"
          className="app-input--large app-block app-input app-full-width app-border-bottom-right-radius-none app-border-top-right-radius-none app-border-top-left-radius-large app-border-bottom-left-radius-large app-pd-r-1 app-pd-l-1 app-pd-y-05"
          onChange={onChangeInput}
          placeholder="Search"
          type="text"
          value={term}
        />
      </form>
    </>
  );
};

export default SearchBar;
