import { IoMdSearch } from "react-icons/io";
import { theme } from "constants/theme";
import { InputContainer, Input } from "./Search.styled";

export const Search = ({ search, setSearch }) => {
  const onHandleChange = (e) => setSearch(e.target.value);
  
  return (
    <InputContainer>
      <IoMdSearch
        style={{
          position: "absolute",
          width: "25px",
          height: "24px",
          top: 0,
          left: "12px",
          color: `${theme.colors.iconColor}`
        }}
      />      
      <Input
        placeholder="Search or start new chat"
        onChange={onHandleChange}
        value={search}
      />
    </InputContainer>
  );
};