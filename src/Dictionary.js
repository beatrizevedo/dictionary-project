import React, { useState } from 'react';
import './Dictionary.css';

export default function Dictionary() {
  let [word, setWord] = useState('');

  function search(event) {
    event.preventDefault();
    alert(`Searching for ${word}`);
  }

  function handleWordChange(event) {
    setWord(event.target.value);
  }

  return (
    <div className="Dictionary">
      <h1>Dictionary</h1>
      <form className="SearchForm" onSubmit={search}>
        <input
          type="search"
          placeholder="Tell me the meaning of"
          onChange={handleWordChange}
        />
        <input type="submit" />
      </form>
    </div>
  );
}
