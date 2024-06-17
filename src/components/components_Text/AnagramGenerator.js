import React, { useState } from "react";

export default function AnagramGenerator() {
  const [input, setInput] = useState("");
  const [anagrams, setAnagrams] = useState([]);

  const generateAnagrams = () => {
    const generate = (str) => {
      if (str.length <= 1) return [str];
      let results = [];
      for (let i = 0; i < str.length; i++) {
        let first = str[i];
        let rest = str.slice(0, i) + str.slice(i + 1);
        let innerAnagrams = generate(rest);
        for (let j = 0; j < innerAnagrams.length; j++) {
          results.push(first + innerAnagrams[j]);
        }
      }
      return results;
    };

    setAnagrams(generate(input));
  };

  return (
    <div>
      <h2>Anagram Generator</h2>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button
        type="button"
        class="btn btn-primary"
        style={{ marginLeft: "5px" }}
        onClick={generateAnagrams}
        disabled={input.length === 0}
      >
        Generate
      </button>
      <ul>
        {anagrams.map((anagram, index) => (
          <li key={index}>{anagram}</li>
        ))}
      </ul>
    </div>
  );
}
