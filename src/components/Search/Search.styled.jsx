import styled from "@emotion/styled";

export const InputContainer = styled.label`
  position: relative;
`;

export const Input = styled.input`
  width: 260px;
  height: 47px;
  padding: 16px 10px 17px 57px;

  font-family: ${props => `${props.theme.fontFamily}, sans-serif`};
  font-weight: 400;
  font-size: 14px;

  color: ${props => props.theme.colors.textColor};

  background-color: ${props => props.theme.colors.white};
  border: ${props => `1px solid ${props.theme.colors.borderInptColor}`};
  box-shadow: 0px 0px 8px rgba(225, 226, 255, 0.7);
  border-radius: 10px;

  ::placeholder {
    font-family: ${props => `${props.theme.fontFamily}, sans-serif`};
    font-weight: 400;
    font-size: 14px;

    color: ${props => props.theme.colors.placeholderColor};
  };
`;