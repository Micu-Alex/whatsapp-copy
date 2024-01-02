import styled, { css } from "styled-components";

export const Container = styled.div`
  max-width: 400px;
  margin: 0 10px;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: #f9f9f9;
`;

export const Title = styled.h2`
  text-align: center;
  color: #333;
`;

export const ListContainer = styled.ul`
  list-style: none;
  padding: 0;
`;

interface UserItemProps {
  $isSelected: boolean;
}

export const UserItem = styled.li<UserItemProps>`
  margin-bottom: 5px;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 3px;
  font-size: 14px;

  ${(props) =>
    props.$isSelected &&
    css`
      background-color: #dff0d8;
    `}
`;
