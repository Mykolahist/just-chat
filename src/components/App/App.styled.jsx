import styled from "@emotion/styled";

export const Container = styled.div`
  width: 400px;
  margin: 10px auto;
  border-right: ${props => `1px solid ${props.theme.colors.borderColor}`};
`;

export const Top = styled.div`
  padding: 20px 10px;
  background-color: ${props => props.theme.colors.topBgColor};
`;

export const Picture = styled.img`
  display: block;
  max-width: 100%;
  height: auto;
  margin-bottom: 30px;

  border-radius: 50%;
`;

export const Search = styled.input`
  width: 340px;
  height: 35px;
  padding: 0 10px 0 35px;

  border: ${props => `1px solid ${props.theme.colors.borderInptColor}`};
  border-radius: 25px;
  background-color: ${props => props.theme.colors.inputBgColor};

  outline: 0;

  ::placeholder {
    color: ${props => props.theme.colors.placeholderColor};
  };
`;

export const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
`;

export const Item = styled.li`
  display: flex;
  align-items: center;
  
  border-bottom: ${props => `1px solid ${props.theme.colors.borderInptColor}`};
`;

export const Photo = styled.img`
  display: block;
  max-width: 100%;
  height: auto;
  margin: 20px 10px;

  border-radius: 50%;
`;

export const Name = styled.h2`
  margin: 0;
  font-family: ${props => `${props.theme.fontFamily}, sans-serif`};
  font-weight: 600;
  font-size: 18px;
  color: ${props => props.theme.colors.borderColor};
`;