import React, { useState } from 'react';
import axios from 'axios';
import './Dictionary.css';

export default function Dictionary() {
  let [word, setWord] = useState('');
  let [answer, setAnswer] = useState('');
  let [phonetic, setPhonetic] = useState('');
  let [type, setType] = useState('');
  let [example, setExample] = useState('');

  function handleResponse(response) {
    setAnswer(response.data.meanings[0].definition);
    setPhonetic(response.data.phonetic);
    setType(response.data.meanings[0].partOfSpeech);
    setExample(response.data.meanings[0].example);
  }

  function search(event) {
    event.preventDefault();
    let apiKey = '049to2dbdcb7ffe54d8674f61d4413a5';
    let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${word}&key=${apiKey}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleWordChange(event) {
    setWord(event.target.value);
  }

  return (
    <div className="Dictionary">
      <h1>● Dictionary ● ●</h1>
      <form className="SearchForm" onSubmit={search}>
        <input
          type="search"
          placeholder="Type your unknown word here"
          onChange={handleWordChange}
          className="SearchBox"
        />
        <input type="submit" value="Search 🔍" className="SubmitButton" />
        <small>Search for only 1 word in English</small>
      </form>

      <div className="Definition">
        <h2 className="Word"> ● {word} ● ●</h2>
        <p className="Phonetic">{phonetic}</p>
        <p className="Type">{type}</p>
        <p className="Answer">{answer}</p>
        <p className="Example">{example}</p>
      </div>
    </div>
  );
}
