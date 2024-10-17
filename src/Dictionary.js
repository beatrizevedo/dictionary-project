import React, { useState } from 'react';
import axios from 'axios';
import './Dictionary.css';

export default function Dictionary() {
  let [word, setWord] = useState('');

  function handleResponse(response) {
    console.log(response.data[0]);
  }

  function search(event) {
    event.preventDefault();
    alert(`Searching for ${word}`);

    let apiKey = '049to2dbdcb7ffe54d8674f61d4413a5';
    let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${word}&key=${apiKey}`;
    axios.get(apiUrl).then(handleResponse);
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
