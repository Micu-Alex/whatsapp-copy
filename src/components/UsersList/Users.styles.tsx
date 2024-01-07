import styled, { css } from "styled-components";

export const Container = styled.div`
  height: 95%;
  padding: 20px;
  background-color: #ffffff;
  border-right: 1px solid #e0e0e0;
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
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  padding: 10px;
  border-radius: 8px;
  cursor: pointer;

  &:hover {
    background-color: #f5f5f5; /* Hover color */
  }

  img {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    margin-right: 10px;
  }

  ${(props) =>
    props.$isSelected &&
    css`
      background-color: #dff0d8;
    `}
`;
export const Dot = styled.div`
  margin-right: 5px;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: ${(props) => props.color || "gray"};
`;
