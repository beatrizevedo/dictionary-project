import React, { useState } from 'react';
import axios from 'axios';
import './Dictionary.css';

export default function Dictionary() {
  let [word, setWord] = useState('');
  let [answer, setAnswer] = useState('');
  let [phonetic, setPhonetic] = useState('');
  let [type, setType] = useState('');
  let [example, setExample] = useState('');
  let [image, setImage] = useState('');
  let [ready, setReady] = useState(true);

  function handleDictionaryResponse(response) {
    setAnswer(response.data.meanings[0].definition);
    setPhonetic(response.data.phonetic);
    setType(response.data.meanings[0].partOfSpeech);
    setExample(response.data.meanings[0].example);
    setReady(true);
  }

  function handleImageResponse(response) {
    setImage(response.data.photos[0].src.original);
    setReady(true);
  }

  function search(event) {
    event.preventDefault();
    let apiKey = '049to2dbdcb7ffe54d8674f61d4413a5';
    let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${word}&key=${apiKey}`;
    axios.get(apiUrl).then(handleDictionaryResponse);

    let apiImageKey = `049to2dbdcb7ffe54d8674f61d4413a5`;
    let apiImageUrl = `https://api.shecodes.io/images/v1/search?query=${word}&key=${apiImageKey}`;
    axios.get(apiImageUrl).then(handleImageResponse);
  }

  function handleWordChange(event) {
    setWord(event.target.value);
  }

  if (ready) {
    return (
      <div className="Dictionary">
        <div
          style={{
            backgroundImage: `url(${image})`,
            backgroundSize: 'cover',
          }}
        >
          <h1>● Dictionary ● ●</h1>
          <form className="SearchForm" onSubmit={search}>
            <input
              type="search"
              placeholder="Type your unknown word here"
              onChange={handleWordChange}
              className="SearchBox"
            />
            <input type="submit" value="Search 🔍" className="SubmitButton" />
            <div className="instructions">
              Search for only 1 word in English
            </div>
          </form>

          <div className="Definition">
            <h2 className="Word"> ● {word} ● ●</h2>
            <p className="Phonetic">{phonetic}</p>
            <p className="Type">{type}</p>
            <p className="Answer">{answer}</p>
            <p className="Example">{example}</p>
          </div>
          <footer>
            <p className="Author">
              This dictionary was created by Beatriz Azevedo. It's open sourced
              on Github and hosted on Netlify
            </p>
          </footer>
        </div>
      </div>
    );
  } else {
    return (
      <div className="Dictionary">
        <h1>● Dictionary ● ●</h1>
        <h2>Refresh and search for another word</h2>
      </div>
    );
  }
}
