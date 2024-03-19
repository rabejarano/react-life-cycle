import { useEffect } from "react";
function ChatRoom(props) {
  const { id = "nara" } = { ...props };

  useEffect(() => {
    console.log("init Creacion", id);
    return () => {
      console.log("dispose");
    };
  }, []);

  useEffect(() => {
    console.log("update", id);
  }, [id]);

  return <h1>{"🧑🏻‍🦲 📞  ClienId " + id}</h1>;
}

export default ChatRoom;
