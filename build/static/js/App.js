import React, { useState } from "react";
import { saveAs } from "file-saver";
import "./styles.css";

export default function WordlistCipherApp() {
  const [words, setWords] = useState([]);
  const [wordlist, setWordlist] = useState([]);
  const [maxLength, setMaxLength] = useState(20);

  const [includeStandard, setIncludeStandard] = useState(false);
  const [includeSpecial, setIncludeSpecial] = useState(false);
  const [extremeMode, setExtremeMode] = useState(false);
  const [aiMode, setAiMode] = useState(false);

  // Function to generate all unique combinations of words
  const generateUniqueCombinations = (arr) => {
    let combinations = new Set();

    const permute = (arr, prefix = "") => {
      if (prefix.length >= 8 && prefix.length <= maxLength) {
        combinations.add(prefix);
      }

      for (let i = 0; i < arr.length; i++) {
        let newArr = arr.slice(0, i).concat(arr.slice(i + 1)); // Remove used word
        permute(newArr, prefix + arr[i]); // No spaces, pure word combination
        permute(newArr, prefix + "_" + arr[i]); // Underscore separated
        permute(newArr, prefix + "-" + arr[i]); // Hyphen separated
      }
    };

    permute(arr);
    return [...combinations];
  };

  // Generates standard password variations
  const generateVariations = (arr) => {
    let variations = new Set();

    arr.forEach(word => {
      if (!word) return;
      variations.add(word);
      variations.add(word.toLowerCase());
      variations.add(word.toUpperCase());

      if (includeStandard) {
        variations.add(word + "123");
       // variations.add("!" + word);
        variations.add(word + "!");
        variations.add(word + "_secure");
      }

      if (includeSpecial) {
        ["@", "#", "$", "%", "&", "*"].forEach(char => {
          variations.add(word + char);
        });
      }

      if (extremeMode) {
        variations.add(word.replace(/a/g, "@").replace(/o/g, "0").replace(/e/g, "3").replace(/i/g, "1"));
        variations.add(word + "!@#");
        variations.add(word + "_root");
        variations.add(word + "_admin");
      }
    });

    return [...variations].filter(word => word.length >= 8 && word.length <= maxLength);
  };

  // AI Mode: Predicts passwords
  const generateAIPasswords = () => {
    if (!aiMode) return [];

    let aiSuggestions = new Set();

    words.forEach(word => {
      ["secure_", "_pass", "admin_", "root_"].forEach(suffix => {
        aiSuggestions.add(suffix + word);
      });
    });

    return [...aiSuggestions].filter(word => word.length >= 8 && word.length <= maxLength);
  };

  // Generates the final wordlist
  const generateWordlist = () => {
    let uniqueCombinations = generateUniqueCombinations(words);
    let variations = generateVariations(words);
    let aiWords = generateAIPasswords();

    setWordlist([...new Set([...uniqueCombinations, ...variations, ...aiWords])]);
  };

  const downloadWordlist = () => {
    const blob = new Blob([wordlist.join("\n")], { type: "text/plain" });
    saveAs(blob, "wordlist.txt");
  };

  return (
    <div className="main-container">
      {/* Left Side - Inputs */}
      <div className="left-side">
        <h2>🔍 Recon Wordlist Generator</h2>
        <textarea 
          placeholder="Enter words (one per line)" 
          value={words.join("\n")} 
          onChange={(e) => setWords(e.target.value.split("\n"))}  // FIXED: Enter now works!
          rows={5}
        />
        <input 
          type="number" 
          placeholder="Max Length" 
          value={maxLength} 
          onChange={(e) => setMaxLength(Number(e.target.value))} 
          min="8" 
        />

        <div className="checkbox-group">
          <label><input type="checkbox" checked={includeStandard} onChange={() => setIncludeStandard(!includeStandard)} /> Include Standard Words</label>
          <label><input type="checkbox" checked={includeSpecial} onChange={() => setIncludeSpecial(!includeSpecial)} /> Include Special Characters</label>
          <label><input type="checkbox" checked={extremeMode} onChange={() => setExtremeMode(!extremeMode)} /> Extreme Mode</label>
          <label><input type="checkbox" checked={aiMode} onChange={() => setAiMode(!aiMode)} /> AI Mode</label>
        </div>

        <button onClick={generateWordlist} className="btn-primary">Generate</button>
        <button onClick={downloadWordlist} className="btn-secondary">Download</button>
      </div>

      {/* Right Side - Wordlist Output */}
      <div className="right-side">
        <h2>📜 Generated Wordlist</h2>
        <pre>{wordlist.join("\n")}</pre>
      </div>
    </div>
  );
}

