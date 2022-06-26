import { Search } from "../Search/Search";
import { Container, Top, List, Item, Photo, Name, Online } from "./Users.styled";

import avatar_1 from "../../pics/avatar_1.jpg";
import avatar_2 from "../../pics/avatar_2.jpg";
import avatar_3 from "../../pics/avatar_3.jpg";
import avatar_4 from "../../pics/avatar_4.jpg";
import avatar_5 from "../../pics/avatar_5.jpg";

export const Users = () => {
  return (
    <Container>
      <Top>        
        <Search />
      </Top>
      <List>
        <Item>
          <Photo
            src={avatar_1}
            width="50"
            alt="avatar"
          />
          <Name>Josefina</Name>
        </Item>
        <Item>
          <Online />
          <Photo
            src={avatar_2}
            width="50"
            alt="avatar"
          />
          <Name>Alice Freeman</Name>
        </Item>
        <Item>
          <Photo
            src={avatar_3}
            width="50"
            alt="avatar"
          />
          <Name>Michael Thomasson</Name>
        </Item>
        <Item>
          <Online />
          <Photo
            src={avatar_4}
            width="50"
            alt="avatar"
          />
          <Name>Jacqueline Bates</Name>
        </Item>
        <Item>
          <Photo
            src={avatar_5}
            width="50"
            alt="avatar"
          />
          <Name>Ramiro</Name>
        </Item>
      </List>
    </Container>
  );
};