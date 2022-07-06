import socket from "../../socket";
import axios from "axios";
import { useState } from "react";
import { Container, Button } from "./LoginBlock.styled";
import { Input } from "components/Search/Search.styled";

export const LoginBlock = ({ onLogin }) => {
  const [roomId, setRoomId] = useState("");
  const [userName, setUserName] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleEnter = async () => {    
    if (!roomId || !userName) {
      return alert("Incorrect data");
    };
    setIsLoading(true);
    await axios
      .post("/rooms", {
        roomId,
        userName,
      });
    onLogin();
  };
  
  return (
    <Container>
      <Input
        type="text"
        placeholder="Room ID"
        value={roomId}
        onChange={e => setRoomId(e.target.value)}
        style={{
          margin: "0 auto 10px"
        }}
      />
      <Input
        type="text"
        placeholder="Your Name"
        value={userName}
         onChange={e => setUserName(e.target.value)}
        style={{
          margin: "0 auto 10px"
        }}
      />
      <Button
        type="button"
        disabled={isLoading}
        onClick={handleEnter}
      >
        {isLoading ? "ENTER" : "ENTRY"}
      </Button>
    </Container>
  );
};