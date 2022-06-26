import styled from "@emotion/styled";

export const Form = styled.form`
  position: absolute;
  bottom: 20px;
  left: 28px;
`;

export const Textarea = styled.textarea`
  width: 706px;
  height: 60px;
  padding: 20px 60px 20px 30px;

  font-family: ${props => `${props.theme.fontFamily}, sans-serif`};
  font-weight: 400;
  font-size: 14px;

  color: ${props => props.theme.colors.textColor};

  background-color: ${props => props.theme.colors.white};
  border: ${props => `1px solid ${props.theme.colors.borderTextarea}`};
  border-radius: 10px;

  ::placeholder {
    font-family: ${props => `${props.theme.fontFamily}, sans-serif`};
    font-weight: 400;
    font-size: 14px;

    color: ${props => props.theme.colors.placeholderColor};
  };

  resize: none;
  writing-mode: none;
`;

export const Button = styled.button`
  position: absolute;
  width: 40px;
  height: 40px;
  top: 10px;
  right: 20px;

  padding: 8px;

  background-color: ${props => props.theme.colors.buttonColor};
  border: ${props => `1px solid ${props.theme.colors.buttonColor}`};
  border-radius: 10px;

  cursor: pointer;
`;