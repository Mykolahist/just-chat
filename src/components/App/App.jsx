import { Container, Top, Picture, Search, List, Item, Photo, Name } from "./App.styled";
import person from "../../pics/person.png";
import avatar_1 from "../../pics/avatar_1.jpg";
import avatar_2 from "../../pics/avatar_2.jpg";
import avatar_3 from "../../pics/avatar_3.jpg";
import avatar_4 from "../../pics/avatar_4.jpg";
import avatar_5 from "../../pics/avatar_5.jpg";

export const App = () => {
  return (
    <Container>
      <Top>
        <Picture
          src={person}
          width="50"
          alt="empty avatar"
        />
        <Search
          placeholder="Search or start new chat"
        />
      </Top>
      <List>
        <Item>
          <Photo
            src={avatar_1}
            width="50"
            alt="empty avatar"
          />
          <Name>Alice Freeman</Name>
        </Item>
        <Item>
          <Photo
            src={avatar_2}
            width="50"
            alt="empty avatar"
          />
          <Name>Josefina</Name>
        </Item>
        <Item>
          <Photo
            src={avatar_3}
            width="50"
            alt="empty avatar"
          />
          <Name>Velazquez</Name>
        </Item>
        <Item>
          <Photo
            src={avatar_4}
            width="50"
            alt="empty avatar"
          />
          <Name>Barrera</Name>
        </Item>
        <Item>
          <Photo
            src={avatar_5}
            width="50"
            alt="empty avatar"
          />
          <Name>Ramiro</Name>
        </Item>
      </List>
    </Container>
  );
};
