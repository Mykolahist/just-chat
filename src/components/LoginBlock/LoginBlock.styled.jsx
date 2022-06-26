import styled from "@emotion/styled";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;
  margin: 60px auto;
`;

export const Button = styled.button`
  margin: 0 auto;
  width: 260px;
  height: 47px;
  padding: 10px 16px;

  font-family: ${props => `${props.theme.fontFamily}, sans-serif`};
  font-weight: 600;
  font-size: 20px;

  color: ${props => props.theme.colors.white};

  background-color: ${props => props.theme.colors.buttonColor};
  border: ${props => `1px solid ${props.theme.colors.buttonColor}`};
  border-radius: 10px;

  cursor: pointer;
`;