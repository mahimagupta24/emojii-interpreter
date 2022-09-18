import React, { useState } from "react";
import "./styles.css";
var emojiDictionary = {
  "😊": "smiling face with smiling eyes",
  "😒": "unamused face",
  "❤️": "heart",
  "🙏": "folded hands",
  "👍": "thumbs up",
  "🤣": "rolling on the floor laughing",
  "😎": "smiling face with sunglasses",
  "😑": "expressionless face",
  "✌️": "victory hand",
  "👌": "ok hand"
};
var emojisWeKnow = Object.keys(emojiDictionary);

export default function App() {
  const [meaning, setMeaning] = useState("");
  function emojiInputHandler(event) {
    var userInput = event.target.value;
    var meaning = emojiDictionary[userInput];

    if (meaning === undefined) {
      meaning = "we dont have this emoji in database";
    }
    setMeaning(meaning);
  }
  function emojiClickHandler(emoji) {
    var meaning = emojiDictionary[emoji];
    setMeaning(meaning);
  }
  return (
    <div className="App">
      <h1> inside outt</h1>
      <input onChange={emojiInputHandler} />
      <h2>{meaning}</h2>
      <h3>emoji we know</h3>
      {emojisWeKnow.map(function (emoji) {
        return (
          <span
            onClick={() => emojiClickHandler(emoji)}
            style={{ fontSize: "2rem", padding: "1rem", cursor: "pointer" }}
            key={emoji}
          >
            {emoji}
          </span>
        );
      })}
    </div>
  );
}
