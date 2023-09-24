import React, { useState, useEffect } from 'react';
import Styles from './input.module.css';

function Input({ getKeywords, handleData }) {
  const [input, setInput] = useState('');

  useEffect(() => {
    if (input.length === 0) {
      handleData();
    }
  }, [input]);

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        getKeywords(input);
      }}
    >
      <input
        style={{ padding: '0.3rem' }}
        value={input}
        placeholder='Search Projects....'
        onChange={(e) => {
          setInput(e.target.value);
        }}
        type="text"
      />
      <button id={Styles.searchBtn} type="submit">
        Search
      </button>
    </form>
  );
}

export default Input;
