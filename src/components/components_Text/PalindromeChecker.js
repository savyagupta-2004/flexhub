import React, { useState } from "react";

export default function PalindromeChecker() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");

  const checkPalindrome = () => {
    const isPalindrome = input === input.split("").reverse().join("");
    setResult(
      isPalindrome ? "Yes, it's a palindrome!" : "No, it's not a palindrome."
    );
  };

  return (
    <div>
      <h2>Palindrome Checker</h2>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button
        type="button"
        class="btn btn-primary"
        mx-2
        onClick={checkPalindrome}
        style={{ marginLeft: "5px" }}
        disabled={input.length === 0}
      >
        Check
      </button>
      <p>{result}</p>
    </div>
  );
}
