import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import ChatRoom from "./chatRoom";

function App() {
  const [count, setCount] = useState(0);
  const [showChatRoom, setShowChatRoom] = useState(true);

  return (
    <>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <button
          onClick={() => setShowChatRoom((showChatRoom) => !showChatRoom)}
        >
          Show ChatRoom
        </button>

        {showChatRoom && <ChatRoom id={`${count}`} />}
      </div>
    </>
  );
}

export default App;
