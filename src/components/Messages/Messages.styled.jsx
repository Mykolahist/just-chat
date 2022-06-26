import styled from "@emotion/styled";

export const Container = styled.div`
  position: relative;
  width: 900px;
  margin-left: 12px;
  background-color: ${props => props.theme.colors.bgMessagesColor};
  border: ${props => `1px solid ${props.theme.colors.borderColor}`};
  border-radius: 20px;
`;

export const Top = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  padding: 20px 15px 15px;

  background-color: ${props => props.theme.colors.white};
  border-bottom: ${props => `1px solid ${props.theme.colors.borderTopColor}`};
  border-radius: 20px 20px 0 0;
`;

export const Photo = styled.img`
  display: block;
  max-width: 100%;
  height: auto;
  margin-right: 23px;

  border-radius: 50%;
`;

export const Name = styled.h2`
  margin: 0;
  font-family: ${props => `${props.theme.fontFamily}, sans-serif`};
  font-weight: 600;
  font-size: 20px;
  color: ${props => props.theme.colors.textColor};
`;

export const List = styled.ul`
  margin: 0;
  padding: 34px 16px 34px 28px;
  list-style: none;
`;

export const Item = styled.li`
  display: flex;
  align-items: center;

  :not(:last-child) {
    margin-bottom: 25px;
  }
`;

export const Avatar = styled.img`
  display: block;
  max-width: 100%;
  height: auto;
  margin-right: 28px;
  
  border-radius: 50%;
  background-color: ${props => props.theme.colors.avatarColor};
`;

export const Letter = styled.p`
  display: block;
  width: 362px;
  margin: 0;
  padding: 8px 10px;

  font-family: ${props => `${props.theme.fontFamily}, sans-serif`};
  font-weight: 400;
  font-size: 14px;
  
  background-color: ${props => props.theme.colors.white};
  border-radius: 10px;
`;