import styled from "@emotion/styled";

export const Container = styled.div`
  width: 400px;
  padding: 0 10px 20px;
  background-color: ${props => props.theme.colors.bgColor};
  border: ${props => `1px solid ${props.theme.colors.borderColor}`};
  border-radius: 20px;
`;

export const Top = styled.div`
  margin-bottom: 10px;
  padding: 20px 15px 15px;
  // border-bottom: ${props => `1px solid ${props.theme.colors.borderColor}`};
`;

export const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
`;

export const Item = styled.li`
  position: relative;
  display: flex;
  align-items: center;
  
  background-color: ${props => props.theme.colors.white};
  border-radius: 10px;

  :not(:last-child) {
    margin-bottom: 8px;
  }

  &:hover {
    box-shadow: 0px 10px 60px rgba(170, 178, 197, 0.2);
  }

  cursor: pointer;
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
  color: ${props => props.theme.colors.textColor};
`;

export const Online = styled.div`
  position: absolute;
  display: block;
  width: 10px;
  height: 10px;
  bottom: 20px;
  left: 45px;
  
  border-radius: 50%;
  background-color: ${props => props.theme.colors.onlineColor};

  outline: ${props => `2px solid ${props.theme.colors.white}`};
`;