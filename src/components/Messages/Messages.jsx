import { FormForLetter } from "components/FormForLetter/FormForLetter";
import { Container, Top, Photo, Name, List, Item, Avatar, Letter } from "./Messages.styled";
import avatar_2 from "../../pics/avatar_2.jpg";

export const Messages = () => {
  return (
    <Container>
      <Top>
        <Photo
          src={avatar_2}
          width="50"
          alt="empty avatar"
        />
        <Name>Alice Freeman</Name>
      </Top>
      <List>
        <Item>
          <Avatar
            src={avatar_2}
            width="50"
            alt="avatar"
          />
          <Letter>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</Letter>
        </Item>
        <Item>
          <Avatar
            src={avatar_2}
            width="50"
            alt="avatar"
          />
          <Letter>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</Letter>
        </Item>
      </List>
      <FormForLetter />
    </Container>
  );
};