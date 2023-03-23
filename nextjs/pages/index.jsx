// index.html
import { useState } from "react";
function HomePage() {
  const names = ["Kadeem Lewis", "Grace Burke", "Justin Diaz"];
  const [likes, setLikes] = useState(0);
  function handleClick() {
    setLikes(likes + 1);
  }
  return (
    <div>
      <header title="Develop. Preview. Ship. 🚀" />
      <ul>
        {names.map((name) => (
          <li key="{name}">{name}</li>
        ))}
      </ul>

      <button onClick={handleClick}>Like ({likes})</button>
    </div>
  );
}

export default HomePage;
