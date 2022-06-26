import { Container, Button } from "./LoginBlock.styled";
import { Input } from "components/Search/Search.styled";

export const LoginBlock = () => {
  return (
    <Container>
      <Input
        type="text"
        placeholder="Room ID"
        style={{
          margin: "0 auto 10px"
        }}
      />
      <Input
        type="text"
        placeholder="Your Name"
        style={{
          margin: "0 auto 10px"
        }}
      />
      <Button type="button">
        ENTER
      </Button>
    </Container>
  );
};