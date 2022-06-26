import { Users } from "components/Users/Users";
import { Messages } from "components/Messages/Messages";

import { Container } from "./Chat.styled";

export const Chat = () => {
  return (
    <Container>
      <Users />
      <Messages />
    </Container>
  );
};