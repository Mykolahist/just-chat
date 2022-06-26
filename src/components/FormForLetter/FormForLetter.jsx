import { useState } from "react";
import { IoMdSend } from "react-icons/io";
import { theme } from "constants/theme";

import { Form, Textarea, Button } from "./FormForLetter.styled";

export const FormForLetter = () => {
  const [letterValue, setValue] = useState();

  return (
    <Form>
      <Textarea
        placeholder="Begin to type a message"
        rows="1"
        value={letterValue}
        onChange={(e) => setValue(e.target.value)}
      ></Textarea>
      <Button type="button">
        <IoMdSend
          style={{
            width: "24px",
            height: "24px",
            color: `${theme.colors.white}`
          }}
        />
      </Button>
    </Form>
  );
};