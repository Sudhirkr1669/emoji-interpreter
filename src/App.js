import "./styles.css";
import React, { useState } from "react";
const emojiDictionary = {
  "❤️": "red heart",
  "😊": "Smiling Face with Smiling Eyes",
  "🔥": " Fire",
  "✅ ": "Check Mark Button",
  "✨": "Sparkles",
  "💀": "Skull",
  "😂": " Face with Tears of Joy",
  "👍": "Thumbs Up",
  "🎉": " Party Popper",
  "👉 ": "Backhand Index Pointing Right",
  "✔️": "Check Mark"
};
var emojiView = Object.keys(emojiDictionary);

export default function App() {
  const [emoji, setEmoji] = useState("");
  const [emojiName, setEmojiName] = useState("");
  function emojiHandler(event) {
    var userEmoji = event.target.value;
    var emoji = emojiDictionary[userEmoji];
    if (emoji === undefined) {
      emoji = "Sorry !! I will add it as soon as possible";
    }
    setEmoji(emoji);
  }
  function emojiNameHandler(item) {
    var emoji = emojiDictionary[item];
    setEmojiName(emoji);
  }
  return (
    <div className="App">
      <h1>See what's inside</h1>

      <input
        onChange={emojiHandler}
        placeholder="search emoji"
        style={{ height: "3rem", width: "20rem", border: "2px solid" }}
      ></input>
      <h2>{emoji}</h2>
      <h2 style={{ backgroundColor: "grey", padding: "2rem" }}>
        Selected from my database
      </h2>
      <h2>{emojiName}</h2>
      <h2 style={{ backgroundColor: "grey", padding: "2rem" }}>
        Select emoji out of these
      </h2>
      {emojiView.map(function (item) {
        return (
          <h2
            key={item}
            style={{ display: "inline", cursor: "pointer" }}
            onClick={() => emojiNameHandler(item)}
          >
            {item}
          </h2>
        );
      })}
    </div>
  );
}
