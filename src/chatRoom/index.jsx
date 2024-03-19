import { useEffect } from "react";
function ChatRoom(props) {
  const { id = "nara", hidden = false } = { ...props };

  useEffect(() => {
    console.log("init Creacion", id);
    return () => {
      console.log("dispose");
    };
  }, []);

  useEffect(() => {
    console.log("update", id);
  }, [id]);

  return (
    <h1 style={{ display: hidden ? "none" : "block" }}>
      {"🧑🏻‍🦲 📞  ClienId " + id}
    </h1>
  );
}

export default ChatRoom;
